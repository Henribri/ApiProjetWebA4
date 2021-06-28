import Route from '@ioc:Adonis/Core/Route'

/* Groupe de route pour la manipulation des adresses */
Route.group(()=>{
    Route.post('address/:type', 'AddressesController.create')
    Route.get('addresses','AddressesController.index')
    Route.get('address/:type', 'AddressesController.getById')
    Route.delete('address/:type','AddressesController.delete')
    Route.put('address/:type','AddressesController.update')
})



/* Groupe de route pour la manipulation des moyens de paiements */
Route.group(()=>{
    Route.post('creditCard', 'CreditCardsController.create')
    Route.get('creditCards','CreditCardsController.index')
    Route.get('creditCard', 'CreditCardsController.getById')
    Route.delete('creditCard','CreditCardsController.delete')
    Route.put('creditCard','CreditCardsController.update')
}).middleware('auth')

/* Groupe de route pour la manipulation des utilisateurs */
Route.group(()=>{
    Route.get('user','UserController.index')
    Route.get('user/:id', 'UserController.getById')
    Route.delete('user/:id','UserController.delete')
    Route.put('user/:id','UserController.update')
    Route.put('user/support/:id','UserController.updateSponsor')
}).middleware('auth')

Route.group(()=>{
    Route.post('user/client', 'UserController.createClient')
    Route.post('user/delivery', 'UserController.createDelivery')
    Route.post('user/restorer', 'UserController.createRestorer')
    Route.get('restorers','RestorersController.index')
})


/* Groupe de route pour la manipulation des restorer */
Route.group(()=>{
    Route.post('restorer', 'RestorersController.createClient')
    Route.get('restorer', 'RestorersController.getById')
    Route.delete('restorer','RestorersController.delete')
    Route.put('restorer','RestorersController.update')
}).middleware('auth')





Route.get('', ()=>{
    return ''
})

/*
Route.post('signup', 'UserController.create')

Route.post('login','AuthController.login')

Route.get('refresh_token', 'AuthController.refresh_token')

Route.get('check', 'AuthController.check')*/