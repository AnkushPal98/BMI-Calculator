const express  = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/" , function (req , res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/bmicalculator" , function (req , res) {
  res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/" , function (req , res) {
  var num1 = Number(req.body.n1);           //  Number() is used to convert text into number
  var num2 = Number(req.body.n2);
  var sum  = num1 + num2;
  var sub = num1 - num2;
  var mul  = num1 * num2;
  var div  = num1 / num2;
  res.send("The addition of " +num1+ " and " + num2 + " is :  "+ sum +
  "<br><br> The subtraction of " +num1+ " and " + num2 + " is :  "+ sub +
  " <br><br> The multiplication of " +num1+ " and " + num2 + " is :  "+ mul +
  "<br><br>The division of " +num1+ " and " + num2 + " is :  "+ div);
  //res.send();
  //res.send("The multiplication of " +num1+ " and " + num2 + " is :  "+ mul);
//  res.send("The division of " +num1+ " and " + num2 + " is :  "+ div);
});

app.post("/bmicalculator" , function (req , res) {
  var weight = Number(req.body.w);
  var height = Number(req.body.h);
  var BMI = weight/(height*height);
  res.send("Your Body Mass Index (BMI)  =   " + BMI + "  kg/m2");

});


app.listen(3000 , function () {
  console.log("server is starting on port 3000");
});
