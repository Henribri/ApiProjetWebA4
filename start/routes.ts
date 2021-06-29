import Route from '@ioc:Adonis/Core/Route'


Route.get('', ()=>{
    return ''
})

Route.post('login_auth','AuthController.loginAuth')

Route.get('refresh_token_auth', 'AuthController.refreshTokenAuth')

Route.get('check_auth', 'AuthController.checkAuth')