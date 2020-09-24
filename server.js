const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

//parse aplication/json
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

app.listen(port, () => {
    console.log('server telah dijalankan');
})