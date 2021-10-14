const express = require("express");
// const {PORT} = require('./src/constants') 
const PORT = 5100
const app = express();
// const pool = require("/.db")

//import routes

const authRoutes = require('./src/routes/auth')

//initialize middlewares

app.use(express.json())

//initialize routes

app.use('/api', authRoutes)

//app start

const appStart = () => {
  try {
    app.listen(PORT, () => {
      console.log(`The app is running at http://localhost:${PORT}`)
    })
  } catch (error) {
    console.log(`Error: ${error.message}`)
  }
}

appStart()
// GETPOST requests

// app.get("/home", (req, res ) => {
//     res.json({message: "This is TravelinBot"});
// });


// app.listen(PORT, () => {
//   console.log(`Server listening on ${PORT}`);
// });
