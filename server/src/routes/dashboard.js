const pool = require("../db");
const authorization = require("../middleware/auth");
const router = require("express").Router();

router.get("/", authorization, async (req, res) => {
  try {
    //after passing req.user the req.user has the payload
    // res.json(req.user);

    const user = await pool.query(
      "SELECT name FROM userstb WHERE login_id =$1",
      [req.user]
    );
    res.json(user.rows[0]);
  } catch (err) {
    console.error(error.message);
    console.log(err.message);
    return res.status(500).json(`${err.message}`);
  }
});

module.exports = router;
