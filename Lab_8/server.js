const express = require('express')
const app = express()


// Code here for how to set 'public' as the static folder for express
let labRoute = require('./public/js/Lab_8')

app.use(express.static('public'))

const PORT = process.env.PORT || 8080
// Code here to have the app listen on port 8080....please provide a console.log message
app.listen(PORT, () => {console.log('Server connected at : ', PORT);});