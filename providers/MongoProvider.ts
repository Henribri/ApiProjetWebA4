import { ApplicationContract } from '@ioc:Adonis/Core/Application'
import { Mongoose } from 'mongoose'

/*
|--------------------------------------------------------------------------
| Provider
|--------------------------------------------------------------------------
|
| Your application is not ready when this file is loaded by the framework.
| Hence, the top level imports relying on the IoC container will not work.
| You must import them inside the life-cycle methods defined inside
| the provider class.
|
| @example:
|
| public async ready () {
|   const Database = this.app.container.resolveBinding('Adonis/Lucid/Database')
|   const Event = this.app.container.resolveBinding('Adonis/Core/Event')
|   Event.on('db:query', Database.prettyPrint)
| }
|
*/
export default class MongoProvider {
  constructor (protected app: ApplicationContract) {
  }

  public register () {
    // Register your own bindings
    const mongoose = new Mongoose()

    
    mongoose.connect('mongodb+srv://Geralt:Ciri@'+
    'corbeilleexo.tag2v.mongodb.net:/Apollon',  {useNewUrlParser: true, useUnifiedTopology: true})
    
/*
    mongoose.connect('mongodb+srv://corbeilleexo.tag2v.mongodb.net:/A4L?authSource=%24external&authMechanism=MONGODB-X509', {
      useUnifiedTopology: true,
      ssl: true,
      sslCert: require('fs').readFileSync(`C:/Users/henri/Desktop/WorshopWeb/Corbeille3/X509-cert-3830741774116890921.pem`),
      sslKey:require('fs').readFileSync(`C:/Users/henri/Desktop/WorshopWeb/Corbeille3/X509-cert-3830741774116890921.pem`),

    });
*/
    // Lorsqu'on fait un import donne l'accès à la BDD
    this.app.container.singleton('Mongoose', ()=> mongoose)

  }

  public async boot () {
    // All bindings are ready, feel free to use them
  }

  public async ready () {
    // App is ready
  }

  public async shutdown () {
    // Cleanup, since app is going down
    await this.app.container.use('Mongoose').disconnect()
  }
}
