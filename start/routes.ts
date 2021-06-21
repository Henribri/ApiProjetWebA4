import Route from '@ioc:Adonis/Core/Route'



/* Command requests */

Route.get('get_command', 'CommandsController.get_command')

Route.post('create', 'CommandsController.create')

Route.delete('delete','CommandsController.delete')

Route.put('edit', 'CommandsController.edit')

Route.patch('pay', 'CommandsController.pay')




/*    Historic requests    */

Route.get('get_historic', 'CommandsController.get_historic')

Route.delete('delete_historic', 'CommandsController.delete_historic')