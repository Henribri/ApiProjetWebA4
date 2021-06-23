import Route from '@ioc:Adonis/Core/Route'


/* Groupe de route pour la manipulation des adresses */
Route.group(()=>{
    Route.post('address', 'AddressesController.create')
    Route.get('address','AddressesController.index')
    Route.get('address/:id', 'AddressesController.getById')
    Route.delete('address/:id','AddressesController.delete')
    Route.put('address/:id','AddressesController.update')
})



/* Groupe de route pour la manipulation des moyens de paiements */
Route.group(()=>{
    Route.post('paymethod', 'PayMethodsController.create')
    Route.get('paymethod','PayMethodsController.index')
    Route.get('paymethod/:id', 'PayMethodsController.getById')
    Route.delete('paymethod/:id','PayMethodsController.delete')
    Route.put('paymethod/:id','PayMethodsController.update')
})





/*Route.get('test', ()=>{
    return 'PAGE DE TEST'
})

Route.post('signup', 'UserController.create')

Route.post('login','AuthController.login')

Route.get('refresh_token', 'AuthController.refresh_token')

Route.get('check', 'AuthController.check')*/