<<<<<<< HEAD
import express from "express";
import con from "../utils/db.js";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/adminlogin",(req,res) =>{
  const sql = "SELECT * from admin where email =? and password =?";
  con.query(sql, [req.body.email, req.body.password],(err, result) =>{
    if (err) return res.json({loginStatus:false, Error:"Query error"});
    if(result.length >0){
      const email = result[0].email;
      const token = jwt.sign(
        {role:"admin",email:email},
        "jwt_secret_key",
        {expiresIN:"1d"}
        
      );
      res.cookie('token', token)
      return res.json({loginStatus:true});
    }else{
      return res.json({loginStatus:false, Error:"wrong email or password"});
      
    }
  });
=======
import express from "express";
import con from "../utils/db.js";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/adminlogin",(req,res) =>{
  const sql = "SELECT * from admin where email =? and password =?";
  con.query(sql, [req.body.email, req.body.password],(err, result) =>{
    if (err) return res.json({loginStatus:false, Error:"Query error"});
    if(result.length >0){
      const email = result[0].email;
      const token = jwt.sign(
        {role:"admin",email:email},
        "jwt_secret_key",
        {expiresIN:"1d"}
        
      );
      res.cookie('token', token)
      return res.json({loginStatus:true});
    }else{
      return res.json({loginStatus:false, Error:"wrong email or password"});
      
    }
  });
>>>>>>> c4bff2ca761f2a0dd175b19db1e28b1d6b35c59e
});