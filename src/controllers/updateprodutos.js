const db = require("../config/database");


exports.updateProductById  = async (req, res) => {
 const produtos_id = req.params.produtos_id;
 const produtos_preco = req.params.produtos_preco;

 console.log(produtos_id, produtos_preco)

 const rows = await db.query('update erp_produtos set produtos_preco = '+produtos_preco+' where produtos_id = '+produtos_id+''); 

 
 
 
 
 
 return res.json(rows.rows);
  };
