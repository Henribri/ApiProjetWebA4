import Database from '@ioc:Adonis/Lucid/Database'
import Route from '@ioc:Adonis/Core/Route'

Route.get('posts', async () => {
  return Database.from('User').select('*')
})

Route.get('get', async () => {
  return await Database
  .table('User')
  .insert({
    name: 'Ado',
    password: 'Loo'
  })
})