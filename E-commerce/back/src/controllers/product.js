const Products = require('../models/product')

module.exports = {
    async create(req, res){
        const prod = await Products.create(req.body);
        return res.status(201).send({prod})
    },

    async List(req, res){
        const prod = await Products.find();
        return res.status(200).send(prod)
    },

    async search(req, res){
        const {type} = req.headers;
        const prod = await Products.find({type})
        return res.status(200).send({prod})
    },

    async upgrade(req, res){
        const {_id, name ,desc ,img ,size ,price ,type, sexy} = req.body
        const prod = await Products.findByIdAndUpdate({_id},{name ,desc ,img ,size ,price ,type, sexy}, {new:true})
        return res.send(prod)
    }
}