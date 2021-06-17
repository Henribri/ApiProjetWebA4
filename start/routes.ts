import Database from '@ioc:Adonis/Lucid/Database'
import Route from '@ioc:Adonis/Core/Route'
import User from 'App/Models/User'
import Hash from '@ioc:Adonis/Core/Hash'
import jwt from 'jsonwebtoken'



Route.get('signup', async () => {
  return await User.create({ email: 'Henri', password:'youpi' })
})

Route.post('login', async ({ auth, request, response }) => {
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
})

Route.get('refresh_token', async({auth,  response})=>{
  try {
    // Check refresh token and give an acces token
    const refreshToken = await auth.use('api').authenticate()

    if (refreshToken) return jwt.sign({ data: 'foobar' }, 'TOKEN_PRIVATE_KEY', { expiresIn: '30m' });
  
  }catch{
    return response.badRequest('Invalid credentials')
  }
})

Route.get('check', async({request})=>{
  return jwt.verify(request.input('token'), 'TOKEN_PRIVATE_KEY');
})