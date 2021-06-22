import Route from '@ioc:Adonis/Core/Route'



/* Command requests */

Route.get('get_command', 'CommandsController.getCommand')

Route.post('create_command', 'CommandsController.createCommand')

Route.delete('delete_command','CommandsController.deleteCommand')

Route.put('edit_command', 'CommandsController.editCommand')

Route.patch('pay_command', 'CommandsController.payCommand')




/*    Historic requests    */

Route.get('get_historic_command', 'CommandsController.getHistoricCommand')

Route.delete('delete_historic_command', 'CommandsController.deleteHistoricCommand')