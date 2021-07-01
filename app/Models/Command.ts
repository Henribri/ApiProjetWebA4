import { Schema, model } from "@ioc:Mongoose";

export default  model('Command', new Schema({
    
    articles:[],
    info: {
        total_price:Number,
        date:String,
        validated:Boolean,

        restorer_id:Number,

        
        client:{
            user_id:Number,
            firstname:String,
            lastname:String,
            email:String,
        },
        
        address:{
            street:String,
            postal_code:Number,
            street_number:Number,
            city:String            
        }
        
    }
}
))