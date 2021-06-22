import { Schema, model } from "@ioc:Mongoose";

export default  model('Article', new Schema({
    name:String,
    description:String,
    price:Number,
    type:String,
    restorer:Number,
    
}))