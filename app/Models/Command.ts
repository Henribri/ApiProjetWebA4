import { Schema, model } from "@ioc:Mongoose";

export default  model('Command', new Schema({
    client: {
        id:Number,
        firstname:String,
        lastname:String,
        email:String,
        address:{
            street:String,
            postal_code:Number,
            city:String            
        }
    },
    restorer:{
        id:Number,
        firstname:String,
        lastname:String,
        email:String,
        address:{
            street:String,
            postal_code:Number,
            city:String            
        }},
    menus:[{
        name:String,
        articles:[String],
        price:Number
    }],
    articles:[{
        name:String,
        price:Number
    }],
    toral_price:Number,
    paid:Boolean
    },
    
))