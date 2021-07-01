import Route from '@ioc:Adonis/Core/Route'



/* Command requests */

Route.get('command', 'CommandsController.getCommand')

Route.post('command', 'CommandsController.createCommand')

Route.delete('command','CommandsController.deleteCommand')

Route.put('command', 'CommandsController.editCommand')

Route.patch('pay', 'CommandsController.payCommand')

Route.patch('validate', 'CommandsController.validateCommand')




/*    Historic requests    */

Route.get('commands', 'CommandsController.getHistoricCommand')

Route.delete('commands', 'CommandsController.deleteHistoricCommand')