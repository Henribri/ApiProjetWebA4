import Route from '@ioc:Adonis/Core/Route'

Route.get('', ()=>{
    return ''
})

/* Command requests */
Route.group(()=>{
Route.get('command', 'CommandsController.getCommand')

Route.post('command', 'CommandsController.createCommand')

Route.delete('command','CommandsController.deleteCommand')

Route.put('command', 'CommandsController.editCommand')

Route.patch('pay', 'CommandsController.payCommand')

Route.patch('validate', 'CommandsController.validateCommand')

Route.get('commands', 'CommandsController.getCommands')

Route.get('commands-restorer', 'CommandsController.getCommandsByRestorer')


/*    Historic requests    */

Route.get('historic', 'CommandsController.getHistoricCommand')

Route.delete('historic', 'CommandsController.deleteHistoricCommand')
}).middleware('auth')