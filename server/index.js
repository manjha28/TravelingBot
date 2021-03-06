const express = require("express");
const cors = require("cors");
const PORT = 5100
const app = express();



//middleware
app.use(express.json());
app.use(cors());

//ROUTES
app.use('/auth', require('./src/routes/auth'));
//dashboard

app.use('/home', require('./src/routes/dashboard'));

app.listen(PORT, ()=>{
  console.log(`Server is listening at http://localhost:${PORT}/`)
});
