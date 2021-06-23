import jwt from 'jsonwebtoken'

export default class AuthController {


    /**
     * @api {post} /login_auth Login a user.
     * @apiName login
     * @apiGroup Auth
     * @apiParam {String} email Email of the user.
     * @apiParam {String} password Password of the user.
     * @apiSuccess {Object} access_token Give an access token.
     * @apiError (500) Error Wrong token.
     */

    public async loginAuth({ auth, request, response }){

        // Get the param of user in the request
        const email = request.input('email')
        const password = request.input('password')
        try {

            // Generate token
            const token =  jwt.sign({
            data: 'foobar'
            }, 'TOKEN_PRIVATE_KEY', { expiresIn: '30m' });

            // Generate refresh token
            const refresh_token = await auth.use('api').attempt(email, password, {
            expiresIn:'1days'
            })

            // Give the token to the client
            return {token, refresh_token}

        } catch {
            return response.badRequest('Invalid credentials')
        }
    }

    /**
     * @api {get} /refresh_token_auth Get a new access token.
     * @apiName refreshToken
     * @apiGroup Auth
     * @apiParam (Authorization){String} Bearer Refresh Token value in authorisation Bearer.
     * @apiSuccess {Object} access_token Give a new access token.
     * @apiError (500) Error Wrong token.
     */

    public async refreshTokenAuth({auth,response}){
        try {
          // Check refresh token and give an acces token
          const refreshToken = await auth.use('api').authenticate()
      
          if (refreshToken) return jwt.sign({ data: 'foobar' }, 'TOKEN_PRIVATE_KEY', { expiresIn: '30m' });
        
        }catch{
          return response.badRequest('Invalid credentials')
        }
      }

    /**
     * @api {get} /check_auth Verify an access token.
     * @apiName check
     * @apiGroup Auth
     * @apiParam {String} jwt Token value.
     * @apiSuccess {Object} access_token Give values of access token.
     * @apiError (500) Error Wrong token.
     */

    public async checkAuth({request}){
        return jwt.verify(request.input('jwt'), 'TOKEN_PRIVATE_KEY');
    }
}
