const express = require('express');
const cors = require('cors');

const Products = require('./controllers/product')

const app = express();

app.use(express.json())
app.use(cors());

app.get('/products', Products.List)
app.post('/register_products', Products.create)
app.post('/update', Products.upgrade)

app.listen(3333)