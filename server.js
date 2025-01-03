const express = require('express')

const app = express()

app.get("/", (req, res) => {
    res.send("Hello ")
})

app.get("/user", (req, res)=>{
    res.send("Hello user")
})

app.listen(3000)