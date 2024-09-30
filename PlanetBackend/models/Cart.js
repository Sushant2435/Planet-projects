const { required } = require("joi")
const mongoose =require("mongoose")
const cartSchema =new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:true
    },
    cartItems:[{
            productId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Product',
            required:true
        },
        quantity:{
            type:Number,
            required:true,
            default:1
        },
        size:{
            type:String,
        }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
    }
],


},{timestamps:true})


module.exports = mongoose.model("Cart",cartSchema)
 