import Route from '@ioc:Adonis/Core/Route'


Route.get('test', ()=>{
    return 'PAGE DE TEST'
})

Route.post('signup', 'UserController.create')

Route.post('login','AuthController.login')

Route.get('refresh_token', 'AuthController.refresh_token')

Route.get('check', 'AuthController.check')