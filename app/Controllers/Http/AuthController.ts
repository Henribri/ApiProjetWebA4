import jwt from 'jsonwebtoken'

export default class AuthController {
    public async login({ auth, request, response }){

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

    public async refresh_token({auth,response}){
        try {
          // Check refresh token and give an acces token
          const refreshToken = await auth.use('api').authenticate()
      
          if (refreshToken) return jwt.sign({ data: 'foobar' }, 'TOKEN_PRIVATE_KEY', { expiresIn: '30m' });
        
        }catch{
          return response.badRequest('Invalid credentials')
        }
      }


    public async check({request}){
        return jwt.verify(request.input('jwt'), 'TOKEN_PRIVATE_KEY');
    }
}
