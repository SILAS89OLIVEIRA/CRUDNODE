const db = require("../config/database");

exports.listAllProducts  = async (req, res) => {

    

    const rows = await db.query('select * from erp_produtos limit10')
     
               
  
 
             return res.json(rows.rows);

            
  };

  
 
  


  


 
