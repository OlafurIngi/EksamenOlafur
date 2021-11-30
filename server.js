// Set up our express.js server
const express = require('express')
const app = express()
const cors = require('cors')
const fs = require("fs")
const port = 3000


app.use(cors()) 
app.use(express.json())

 


// The Post method to register a user
app.post("/create", (req, res) => {
  
    console.log(req.body);

    fs.writeFile("database/users.json", JSON.stringify(req.body, null, 4), error => {
        if (error) 
        res.send(error)
    })
    
})




app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})

