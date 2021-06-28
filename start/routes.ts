import Route from '@ioc:Adonis/Core/Route'


Route.get('test', ()=>{
    return 'PAGE DE TEST'
})


Route.get('get_all_deliveries', 'DeliveriesController.getAllDeliveries')

Route.get('get_one_delivery', 'DeliveriesController.getOneDelivery')



Route.group(()=>{
    Route.patch('update_delivery','DeliveriesController.updateDelivery')
    Route.post('create_delivery', 'DeliveriesController.createDelivery')
}).middleware('auth')
