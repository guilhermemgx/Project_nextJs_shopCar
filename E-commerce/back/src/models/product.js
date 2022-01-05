const mongoose = require('../database')

const Product = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    desc:{
        type:String,
        require:true
    },
    img:{
        type:Array,
        require:true
    },
    size:{
        type:Array,
        require:true
    },
    sexy:String,
    price:{
        type:String,
        require:true
    },
    type:{
        type:String,
        require:true
    },
    createdAt:{
        type:Date,
        default: Date.now()
    }
})

const Prod = mongoose.model('products', Product)

module.exports = Prod

