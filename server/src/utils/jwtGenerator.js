const jwt = require("jsonwebtoken")
require('dotenv').config({path:"C:\\Users\\manis\\TravelingBot\\server\\.env"});
console.log(process.env.PRIVATE_KEY)

function jwtGenerator(login_id){
    const payload = {
        user : login_id,

    };
    return jwt.sign(payload, process.env.PRIVATE_KEY, {expiresIn: "1hr"});
}
module.exports = jwtGenerator;