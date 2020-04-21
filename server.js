const express = require("express");

const app = express();


app.use(express.static(__dirname + '/public'))


app.get("/",(req,res) => {
    let hours=new Date().getHours()
    if ((hours<8) || (hours>17)){
         res.sendFile(__dirname + '/public/we-are-closed.html')
    }
    else res.sendFile(__dirname + '/public/home.html')
})



// app.get("/app.css",(req,res) => {
//     res.sendFile (__dirname + "/public/app.css")
// }

// )
    


// app.get('/home',(req,res) => {
//     res.sendFile(__dirname + "/public/home.html")
// })

// app.get('/our-services',(req,res) => {
//     res.sendFile(__dirname + "/public/our-services.html")
// })

// app.get('/contact',(req,res) => {
//     res.sendFile(__dirname + "/public/contact.html")
// })


app.listen(5000,(err) => {
if (err) console.log("the server is not running")
else console.log("the server is running on port 5000")

})