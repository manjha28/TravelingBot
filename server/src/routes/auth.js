const router = require('express').Router();
const bcrypt = require('bcryptjs/dist/bcrypt');
const pool = require("../db/index")
const jwtGenerator = require("../utils/jwtGenerator")
//Register


router.post("/register", async(req, res)=>{
  try{

    //1. destructure the req.body (name,email,password)
    const {name, email, password} = req.body;
    //2. check if user exist
    const user = await pool.query("SELECT * FROM userstb WHERE email =$1", [
      email
    ]);
    if (user.rows.length !==0){
      return res.status(401).send("User already exists");  
    };
    //3.bcrypt user password

    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    const bcryptPassword = await bcrypt.hash(password, salt);


    //4.add the new user insode the databse
    const newUser = await pool.query("INSERT INTO userstb(name,email,password) VALUES ($1,$2,$3) RETURNING *",
    [name,email,bcryptPassword]);

    // res.json(newUser.rows[0])


    //5.genrater jettoken

    const token = jwtGenerator(newUser.rows[0].login_id);
    res.json({token});




  }catch(err){
    console.error(err.message);
    res.status(500).send(`${err.message}`);

  }
} )

module.exports =router;