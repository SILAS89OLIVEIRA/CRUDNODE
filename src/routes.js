const express = require('express');

const consultaprodutos = require('./controllers/consultaprodutos');

const insertprodutos = require('./controllers/insertprodutos');

const deleteprodutos = require('./controllers/deleteprodutos');

const deleteprodutosall = require('./controllers/deleteprodutosall');

const updateprodutos = require('./controllers/updateprodutos');



const routes = express.Router();

routes.get('/consultaprodutos/', consultaprodutos.listAllProducts);

routes.post('/insertprodutos/:produtos_revista/:produtos_tamanho/:produtos_cor/:produtos_dbasica/:produtos_descricao/:produtos_pagina/:produtos_preco/:produtos_num_item/:produtos_num_fornecedor/', insertprodutos.createProduct);

routes.post('/deleteprodutos/:produtos_id/', deleteprodutos.deleteProductById);

routes.post('/deleteprodutosall/', deleteprodutosall.deleteProductById);

routes.post('/updateprodutos/:produtos_id/:produtos_preco/', updateprodutos.updateProductById);




module.exports = routes;
