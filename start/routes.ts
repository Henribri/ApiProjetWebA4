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
    Route.post('creditCard', 'CreditCardsController.create')
    Route.get('creditCard','CreditCardsController.index')
    Route.get('creditCard/:id', 'CreditCardsController.getById')
    Route.delete('creditCard/:id','CreditCardsController.delete')
    Route.put('creditCard/:id','CreditCardsController.update')
})

/* Groupe de route pour la manipulation des utilisateurs */
Route.group(()=>{
    Route.post('user/client', 'UserController.createClient')
    Route.post('user/delivery', 'UserController.createDelivery')
    Route.post('user/restorer', 'UserController.createRestorer')
    Route.get('user','UserController.index')
    Route.get('user/:id', 'UserController.getById')
    Route.delete('user/:id','UserController.delete')
    Route.put('user/:id','UserController.update')
})


/* Groupe de route pour la manipulation des restorer */
Route.group(()=>{
    Route.post('restorer', 'RestorersController.createClient')
    Route.get('restorer','RestorersController.index')
    Route.get('restorer/:id', 'RestorersController.getById')
    Route.delete('restorer/:id','RestorersController.delete')
    Route.put('restorer/:id','RestorersController.update')
})





/*Route.get('test', ()=>{
    return 'PAGE DE TEST'
})

Route.post('signup', 'UserController.create')

Route.post('login','AuthController.login')

Route.get('refresh_token', 'AuthController.refresh_token')

Route.get('check', 'AuthController.check')*/