import Route from '@ioc:Adonis/Core/Route'


Route.get('', ()=>{
    return ''
})

Route.post('login','AuthController.loginAuth')

Route.get('refresh-token', 'AuthController.refreshTokenAuth')

Route.get('check-cd .auth', 'AuthController.checkAuth')