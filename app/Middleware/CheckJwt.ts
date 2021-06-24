import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import jwt from 'jsonwebtoken'

export default class CheckJwt {

  public async handle ({request, response}: HttpContextContract, next: () => Promise<void>) {
    await jwt.verify(request.input('jwt'), "TOKEN_PRIVATE_KEY", function(err) {
      if(err)return response.unauthorized({message:"JWT Token error", error : err})
      next()
    });

  }

}