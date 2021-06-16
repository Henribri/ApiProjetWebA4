import Database from '@ioc:Adonis/Lucid/Database'
import Route from '@ioc:Adonis/Core/Route'
import User from 'App/Models/User'

import Hash from '@ioc:Adonis/Core/Hash'


Route.post('posts', async ({auth, request, response}) => {


  const email = request.input('email')
  const password = request.input('password')

  // Lookup user manually
  const user = await User.findByOrFail('email','Henri')

  // Generate token
  const token = await auth.use('api').generate(user)

  return token
})

Route.get('get', async () => {
  return await User.create({ email: 'Henri', password:'youpi' })
})