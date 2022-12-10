const db = require("../config/database");


exports.createProduct  = async (req, res) => {
 const produtos_revista = req.params.produtos_revista;
 const produtos_tamanho = req.params.produtos_tamanho;
 const produtos_cor = req.params.produtos_cor;
 const produtos_dbasica = req.params.produtos_dbasica;
 const produtos_descricao = req.params.produtos_descricao;
 const produtos_pagina = req.params.produtos_pagina;
 const produtos_preco = req.params.produtos_preco;
 const produtos_num_item = req.params.produtos_num_item;
 const produtos_num_fornecedor = req.params.produtos_num_fornecedor;


 var produtos_descricao_text = "'"+produtos_descricao.toString()+"'";

 console.log(produtos_revista,produtos_tamanho,produtos_cor,produtos_dbasica,produtos_descricao,produtos_pagina,produtos_preco,produtos_num_item,produtos_num_fornecedor)

 const rows = await db.query('INSERT INTO public.erp_produtos( \r\
       produtos_revista, produtos_tamanho, produtos_cor, \r\
        produtos_dbasica, produtos_descricao, produtos_pagina, produtos_preco, \r\
        produtos_num_item, produtos_num_fornecedor)\r\
VALUES ('+produtos_revista+', '+produtos_tamanho+', '+produtos_cor+', '+produtos_dbasica+', \r\
        '+produtos_descricao_text+', '+produtos_pagina+', '+produtos_preco+', '+produtos_num_item+', \r\
        '+produtos_num_fornecedor+');\r\
'); 

 
 
 
 
 
 return res.json(rows.rows);
  };
