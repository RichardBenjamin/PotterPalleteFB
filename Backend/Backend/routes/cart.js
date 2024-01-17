const express = require("express");
const router = express.Router();
const db = require("../db");


router.get("/getuserCartItem/:id", async function (req, res, next) {
  try {
    const queryText = ("SELECT uploadWork.itemname,uploadWork.id, uploadWork.categoryValue, uploadWork.images,uploadWork.price, potterUsers.name FROM cartx JOIN uploadWork ON cartx.item_id = uploadWork.id JOIN potterUsers ON cartx.user_id = potterUsers.id WHERE potterUsers.id = $1;")
    const values = [req.params.id]
      const results = await db.query(queryText, values)
      res.json(results.rows)
  } catch (err) {
      return next(err);
  }
});




router.get("/getuserPurchasedItem/:id", async function (req, res, next) {
  try {
    const queryText = ("SELECT uploadWork.itemname,uploadWork.id, uploadWork.categoryValue, uploadWork.images,uploadWork.price, potterUsers.name FROM purchased JOIN uploadWork ON purchased.item_id = uploadWork.id JOIN potterUsers ON purchased.user_id = potterUsers.id WHERE potterUsers.id = $1;")
    const values = [req.params.id]
      const results = await db.query(queryText, values)
      res.json(results.rows)
  } catch (err) {
      return next(err);
  }
});




router.get("/getAllCartItems", async function (req, res, next) {
  try {
    const queryText = ("SELECT uploadWork.itemname, uploadWork.categoryValue, uploadWork.images,uploadWork.price, potterUsers.name FROM cartx JOIN uploadWork ON cartx.item_id = uploadWork.id JOIN potterUsers ON cartx.user_id = potterUsers.id")
      const results = await db.query(queryText)
      res.json(results.rows)
  } catch (err) {
      return next(err);
  }
});






  
router.post("/addToCart", async (req, res, next) =>{
    try {
        const cartx = await db.query("INSERT INTO cartx (user_id, item_id) VALUES ($1, $2)", [ req.body.userId, req.body.itemId])
        return res.json({success: true, data: cartx.rows[0], message: "Success",});
      }
    catch (err) {
      return next(err)
    }
  })
  


router.post("/addToCart", async (req, res, next) =>{
    try {
        const cartx = await db.query("INSERT INTO cartx (user_id, item_id) VALUES ($1, $2)", [ req.body.userId, req.body.itemId])
        return res.json({success: true, data: cartx.rows[0], message: "Success",});
      }
    catch (err) {
      return next(err)
    }
  })



  router.post("/getCartItem", async function (req, res, next) {
    try {
      const queryText = ("SELECT uploadWork.itemname, uploadWork.categoryValue, uploadWork.images,uploadWork.price, potterUsers.name FROM cartx JOIN uploadWork ON cartx.item_id = uploadWork.id JOIN potterUsers ON cartx.user_id = potterUsers.id WHERE potterUsers.id = $1 and uploadWork.id = $2 ;")
      const values = [req.body.userId, req.body.itemId]
        const results = await db.query(queryText, values)
        if (results.rows.length > 0) {
          res.json({ message: "Already Exists" });
        } else{
          const cartx = await db.query("INSERT INTO cartx (user_id, item_id) VALUES ($1, $2)", [ req.body.userId, req.body.itemId])
          return res.json({success: true, data: cartx.rows[0], message: "Success",});

        }
    } catch (err) {
        return next(err);
    }
  });


  router.post("/purchasedTable", async function (req, res, next) {
    try {
          const purchase = await db.query("INSERT INTO purchased (user_id, item_id) VALUES ($1, $2)", [ req.body.userId, req.body.itemId])
          return res.json({success: true, data: purchase.rows[0], message: "SuccessP",});
    } catch (err) {
        return next(err);
    }
  });




  router.delete("/deleteCartItem", async function (req, res, next) {
    try {
      const queryText = ("DELETE FROM cartx WHERE user_id = $1 and item_id = $2");
      const values = [req.body.userId, req.body.itemId];
      const results = await db.query(queryText, values);

      res.json({ message: "Item Deleted", data: results.rows[0]});
    } catch (err) {
      res.send("Failed")
        return next(err);
    }
  });




  router.delete("/deletePurchasedItem", async function (req, res, next) {
    try {
      const queryText = ("DELETE FROM purchased WHERE user_id = $1 and item_id = $2");
      const values = [req.body.userId, req.body.itemId];
      const results = await db.query(queryText, values);

      res.json({ message: "Purchased Item Deleted", data: results.rows[0]});
    } catch (err) {
      res.send("Failed")
        return next(err);
    }
  });




  router.delete("/deleteAllCartItem", async function (req, res, next) {
    try {
      const queryText = ("DELETE FROM cartx WHERE user_id = $1");
      const values = [req.body.userId];
      const results = await db.query(queryText, values);

      res.json({ message: " All Items deleted", data: results.rows[0]});
    } catch (err) {
      res.send("Failed")
        return next(err);
    }
  });




  router.delete("/deleteUploadedItem", async function (req, res, next) {
    try {
      const queryText = ("DELETE FROM uploadWork WHERE uploadid = $1 and id = $2");
      const values = [req.body.uploadId, req.body.itemId];
      const results = await db.query(queryText, values);

      res.json({ message: "Item Deleted", data: results.rows[0]});
    } catch (err) {
      res.send("Failed")
        return next(err);
    }
  });







  // router.post("/getest", async (req, res, next) => {
  //   try {
  //     // Validate request body format
  //     if (!Array.isArray(req.body)) {
  //       return res.status(400).json({ error: "Invalid request body format" });
  //     }
  
  //     // Extract and format values for multiple rows
  //     const values = req.body.map(item => [item.one, item.two]);
  //     const formattedValues = values.map(row => `(${row.join(', ')})`).join(', ');
  
  //     // Construct multi-row INSERT query
  //     const query = `INSERT INTO testing2 (one, two) VALUES ${formattedValues}`;
  
  //     // Execute the query with value escaping (example using parameterized query)
  //     const result = await db.query(query); // Pass values separately for escaping
  
  //     return res.json({ success: true, data: result.rows, message: "Success" });
  //   } catch (err) {
  //     // Handle errors more specifically (example)
  //     if (err.code === 'ER_DUP_ENTRY') {
  //       return res.status(409).json({ error: "Duplicate entry" });
  //     } else {
  //       return next(err);
  //     }
  //   }
  // });
  

  // router.post("/getest", async (req, res, next) =>{
  //   try {
  //     const result = await db.query("INSERT INTO testing2 (one, two) VALUES ($1, $2)", [ req.body.one, req.body.two])
  //     return res.json({success: true, data: result.rows[0], message: "Success",});
  //     }
  //   catch (err) {
  //     return next(err)
  //   }
  // })


  router.post("/getest", async (req, res, next) => {
    try {
      // const values = req.body.map(item => [item.one, item.two]);
      const query = "INSERT INTO testing2 (one, two) VALUES ?";
      const values =  [ req.body.one, req.body.two]
      const result = await db.query(query, [values]);
      return res.json({ success: true, data: result.rows, message: "Success" });
    } catch (err) {
      return next(err);
    }
  });

  // router.post("/getest", async (req, res, next) => {
  //   try {
  //     const values = req.body.map(item => [item.one, item.two]);
  //     const query = "INSERT INTO testing2 (one, two) VALUES $1";
  //     const formattedValues = values.map(row => `(${row.join(', ')})`).join(', ');
  //     const finalQuery = query.replace('$1', formattedValues);
  //     const result = await db.query(finalQuery);
  //     return res.json({ success: true, data: result.rows, message: "Success" });
  //   } catch (err) {
  //     return next(err);
  //   }
  // });
  


  
router.get("/getest", async function (req, res, next) {
  try {
    const queryText = ("SELECT * FROM testing2")
      const results = await db.query(queryText)
      res.json(results.rows)
  } catch (err) {
      return next(err);
  }
});






  
module.exports = router;