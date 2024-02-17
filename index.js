
const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const port = 8080;

// const port = process.env.PORT || 8080;


// Host the static website and set the path  and Handlebars 
const staticPath = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views")
const partials_path = path.join(__dirname, "../templates/partials");
//Host the static website
app.use(express.static(staticPath));
app.set("view engine", "hbs");
app.set('views', template_path);
hbs.registerPartials(partials_path);



// ****************** Routing *****************
// Create the Home Page 
app.get("", (req, res)=>{
    res.render("index");
})


// Create the about page 
app.get("/about", (req, res)=>{
    res.render("about");
})


// Create the weather page 
app.get("/weather", (req, res)=>{
     res.render("weather");
})

// Create the Error Page 
app.get("*", (req, res)=>{
    res.render("404Error", {
        errorMsg: "Ooops! Page Not Found"
    });
})

// Listen the server 
const server = app.listen(port, ()=>{
    console.log(`Listening to  website at port  number ${port}`);
})