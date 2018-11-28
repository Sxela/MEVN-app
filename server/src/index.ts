console.log('Hello World')

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
//const config = require('./config/config')
import * as config from './config/config';


const app = express()

app.listen(process.env.PORT || config.port,
    () => console.log(`Server start on port ${config.port} ...`))

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/posts', (req, res) => {
    res.send(
      [{
        title: "Hello World!",
        description: "Hi there! How are you?"
      }]
    )
  })