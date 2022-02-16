const express = require('express')
const path = require('path')
const HOST = 'http://localhost:18181'
const PORT = 18181

const app = express()
    .set('port', PORT)
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')

// Static public files
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function (req, res) {
    res.send('Get ready for OpenLand!')
})

app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'))
})
