import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import jwt from 'jsonwebtoken'

export default class CheckJwt {

    /**
     * @api Global Middleware Check Json web token.
     * @apiName CheckJwt
     * @apiGroup Auth
     * @apiParam {String} JWT must be check to auth the request.
     * @apiSuccess JWT verified and validated.
     * @apiError JWT not validated.
     */
  public async handle ({request, response}: HttpContextContract, next: () => Promise<void>) {   
    await jwt.verify(request.input('jwt'), "TOKEN_PRIVATE_KEY", function(err, decoded) {
      if(err)return response.unauthorized("JWT Token error")
      next()
    });

  } 

  
}