const router = require("express").Router();
const bcrypt = require("bcryptjs/dist/bcrypt");
const pool = require("../db/index");
const jwtGenerator = require("../utils/jwtGenerator");
const validInfo = require("../middleware/validInfo");

//Register
router.post("/register",validInfo, async (req, res) => {
  try {
    //1. destructure the req.body (name,email,password)
    const { name, email, password } = req.body;
    //2. check if user exist
    const user = await pool.query("SELECT * FROM userstb WHERE email =$1", [
      email,
    ]);
    if (user.rows.length !== 0) {
      return res.status(401).send("User already exists");
    }
    //3.bcrypt user password

    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    const bcryptPassword = await bcrypt.hash(password, salt);

    //4.add the new user insode the databse

    const newUser = await pool.query(
      "INSERT INTO userstb(name,email,password) VALUES ($1,$2,$3) RETURNING *",
      [name, email, bcryptPassword]
    );

    // res.json(newUser.rows[0])
    //5.genrater jettoken

    const token = jwtGenerator(newUser.rows[0].login_id);
    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send(`${err.message}`);
  }
});

//login Route

router.post("/login",validInfo,async (req, res) => {
  try {
    //1. destructure req.body
    const { email, password } = req.body;

    //2. check if user exists(if not then register)
    const user = await pool.query("SELECT * FROM userstb WHERE email = $1", [
      email,
    ]);

    if (user.rows.length === 0) {
      return res.status(401).send(`$email does not exist`);
    }

    //3. check if incoming password is same as stored password

    const validPassword = await bcrypt.compare(password, user.rows[0].password);
    // console.log(validPassword)
    if (!validPassword) {
      return res.status(401).send("invalid password");
    }

    //4.//give jwt token

    const token = jwtGenerator(user.rows[0].login_id);
    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send(`${error.message}`);
  }
});
module.exports = router;
