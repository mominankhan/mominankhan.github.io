const express = Require('express')
const app = express()


// Code here for how to set 'public' as the static folder for expres
app.use(express.static('public'))

// Code here to have the app listen on port 8080....please provide a console.log message
app.listen(8080, () => {
    console.log("Server started...listening on PORT 8080.");
})
