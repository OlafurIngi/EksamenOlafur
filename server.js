// Set up our express.js server
const express = require('express')
const app = express()
const cors = require('cors')
const fs = require("fs")
const port = 3000


app.use(cors()) 
app.use(express.json())

app.use(express.static("./src/views"));



// The POST method to register a user
app.post("/create", (req, res) => {
    fs.writeFile("database/users.json", JSON.stringify(req.body, null, 4), error => {
        if (error) 
        res.send(error)
        res.send({
            msg: "success"
        })
    })
    
})

// The POST method to login to account
app.post("/login", (req, res) => {
    fs.readFile("database/users.json", (error, data) => {
        if(error) res.send(error)
        res.send({
            msg: "success"
        })
    })
})

// The delete method to delete account




app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})

