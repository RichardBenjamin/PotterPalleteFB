const express = require("express");
const router = express.Router();
const db = require("../db");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;

router.get("/", async function (req, res, next) {
    try {
        const results = await db.query("SELECT * FROM potterUsers")
        res.json(results.rows)
        
    } catch (err) {
        return next(err);
        
    }
});






router.post("/", async (req, res, next) => {
    try {
        const foundUser = await db.query("SELECT * FROM potterUsers WHERE email=$1", [req.body.email])
        if (foundUser.rows.length == 0) {
          console.log("invalid");
            return res.json({ message: "Invalid" });
        }
        const hashedPassword = await bcrypt.compare(
            req.body.password,
            foundUser.rows[0].password
          );
          if (hashedPassword === false) {
            console.log("wrong password");
            return res.json({ message: "Invalid" });
          }
          const roles = foundUser.rows[0].roles
          const username = foundUser.rows[0].name
          console.log(username);
          const email = foundUser.rows[0].email
          const id = foundUser.rows[0].id
          console.log(foundUser.rows);
          console.log(username);
          console.log(roles);
          const token = jwt.sign({ username }, secret, {
            expiresIn: 60 * 60,
          });
            console.log("logged");
          return res.json({ token, message: "logged", username, roles, email, id});

        } catch (err) {
          return next(err)
    }
})






































// router.post("/", async (req, res, next) => {
//     try {
//         const foundUser = await db.query("SELECT * FROM users WHERE email=$1", [req.body.email])
//         res.json(foundUser.rows.length)
//         if (foundUser.rows.length == 0) {
//             console.log("not found");
//             return res.json({ message: "Invalid" });
//         }
//         const username = foundUser.rows[0].name
//         console.log("name", username);
//         const hashedPassword = await bcrypt.compare(
//             req.body.password,
//             foundUser.rows[0].password
//           );
//           if (hashedPassword === false) {
//             console.log("wrong password");
//             return res.json({ message: "Invalid" });
//           }
//           console.log(username);
//           return res.json({message: "logged", username});
//         } catch (err) {
//           return next(err)
//     }
// })












// exports.login = async (req, res, next) => {
//     try {
//       const foundUser = await getUserByEmail(req.body.email);
//       const username = foundUser.rows[0].name
//       if (foundUser.rows.length === 0) {
//         return res.json({ message: "Invalid" });
//       }
//       const hashedPassword = await bcrypt.compare(
//         req.body.password,
//         foundUser.rows[0].password
//       );
//       if (hashedPassword === false) {
//         return res.json({ message: "Invalid" });
//       }
//       return res.json({message: "logged", username});
//     } catch (err) {
//       return next(err);
//     }
//   };


//   exports.getUserByEmail = async (email) => {
//     return await db.query("SELECT * FROM users WHERE email=$1", [email]);
//   };


module.exports = router;





