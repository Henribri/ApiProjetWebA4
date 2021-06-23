import { Schema, model } from "@ioc:Mongoose";

export default  model('Delivery', new Schema({

    status:String,
    command_id:String,
    start:Date,
    end:Date,
    distance:Number,
    livreur: new Schema({
        id:Number,
        firstname:String,
        lastname:String,
        email:String,
        phone:String,
    })








    },
    
))