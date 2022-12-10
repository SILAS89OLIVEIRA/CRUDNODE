const db = require("../config/database");


exports.deleteProductById  = async (req, res) => {
 const produtos_id = req.params.produtos_id;

 const rows = await db.query('delete from erp_produtos'); 

 
 
 
 
 
 return res.json(rows.rows);
  };
