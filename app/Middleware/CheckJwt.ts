import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import jwt from 'jsonwebtoken'

export default class CheckJwt {

  public async handle ({request, response}: HttpContextContract, next: () => Promise<void>) {   
    await jwt.verify(request.input('jwt'), "TOKEN_PRIVATE_KEY", function(err, decoded) {
      if(err)return response.unauthorized("JWT Token error")
      next()
    });

  } 

  
}