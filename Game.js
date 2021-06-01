const express = require('express')
const port = 3000

const app = express();

app.get('/', (req, res) => {
  res.write('Hello World');
  res.end();
})

app.get('/erica', (req, res) => {
  var i = 1;
    max = 5;
    for (; i <= max; i++) {
    res.setHeader('Content-Type', 'text/html');
  res.write('Hello Erica');
  res.end();
}})

app.listen(port, () => console.log('Server is listening on port', + port) );

var Main_word = ["e","r","i","c","a"];
var Users_Guess = ["","","","",""];
var Main_length = Main_word.length;

Main_length =  Users_Guess;

for (i = 0; i <= Main_length; i++) {
  if (User_Guess == Main_length) {
  Users_Guess += 1 [i]
  res.write("well done");
} else {
    res.write("Incorrect");
}}




