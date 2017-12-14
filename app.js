var express = require("express"),
    app     = express();
    
app.use(express.static("css"));
app.use(express.static("js"));
app.set("view engine", "ejs");
    
app.get("/", (req, res) => {
   res.render("index"); 
});
    
app.listen(process.env.PORT, process.env.IP, () => {
   console.log("Server Started"); 
});