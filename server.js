const express = require("express");
const app = express();
const morgan = require("morgan");
const port = 4000;
//Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/api/students", (req, res) =>{
  const students = [
    {id: 1, firstName: "Megan", lastName: "Summer"},
    {id: 2, firstName: "Carly", lastName: "Bean"},
    {id: 3, firstName: "Nicholas", lastName: "Mickey"}
  ];
  res.send(students);
});




app.listen(port, ()=>{
  console.log(`Sever Started on Port ${port}`)
});
