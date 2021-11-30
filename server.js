// Set up our express.js server
const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors()) 

const router = express.Router();
const port = 3000
 
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})

