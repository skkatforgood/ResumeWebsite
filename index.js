const express = require("express");
const app = express()
const https = require("https")
const path = require("path")
const fs = require("fs")

// app.use('/', (req,res,next) => {
//     //res.send("first pass")
// })

app.use(express.static('public'));

app.get('/', (req,res) => {
    res.send(fs.readFileSync("./public/HomePage.html", "utf-8"))
})

const sslServer = https.createServer({
    key: fs.readFileSync(path.join(__dirname, "cert", "key.pem")),
    cert: fs.readFileSync(path.join(__dirname, "cert", "cert.pem")),
}, app)
//app.listen(3000, () => {console.log("Https server at http://localhost:3000")})
sslServer.listen(3000, () => {console.log("Https server at https://localhost:3000")})