import { Schema, model } from "@ioc:Mongoose";

export default  model('Menu', new Schema({
    name:String,
    articles:[new Schema({
        name:String,
        description:String,
        type:String,
    })],
    price:Number,
    restorer:Number,
}))