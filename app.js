const express = require("express")
const app = express()
const ejs = require("ejs")
const bodyParser = require("body-parser")
const path = require("path")
const fs = require("fs")
const Store = require("./model/customer.js")

app.use(express.static("public"));

//setting the view engine
app.set("view engine","ejs")
app.use(bodyParser.urlencoded({extended:true}))
//serving static files



app.get("/table",(req,res)=>{
    //search product and return products


    Store.get_data((data)=>{
        res.render("table.ejs",{data:data})
    })
   

    
   

})

app.get("/AddItem",(req,res)=>{
    res.render("addItem")

})

app.post("/AddItem",(req,res)=>{
    //add new item to the 
    console.log(req.body)
    let data = {
        "srNo":"2",
        "carOwner":2,
        "simNo":4,
        "location":5,
        "phoneNumber":555,
        "reg":8,
        "vehicle":"yuuu"
    
    }
    Store.add_data(data)

    res.redirect("/table")

})

app.post("/deleteItem",(req,res)=>{
    console.log(req.body.id)
    //delete specific item from database and return the table
    res.redirect("/table")

})
app.get("/deleteItem",(req,res)=>{
    //delete specific item from database and return the table
    res.render("deleteItem.ejs")

})
app.post("/searchItem",(req,res)=>{
    //delete specific item from database and return the table
    res.render("searchresult")

})


app.listen(5000,(err)=>{
    console.log("sucessfully")
})