import jwt from 'jsonwebtoken'

export default class CheckJwt {

  public async handle ({request, response}, next: () => Promise<void>) {
    const token = request.header('authorization').split(" ")
     await jwt.verify(token[1], "TOKEN_PRIVATE_KEY", async function(err) {
      if(err)return response.unauthorized({message:"JWT Token error", error : err})
      await next()
    });

  }

}