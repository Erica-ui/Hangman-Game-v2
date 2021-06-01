const express = require('express')
const port = 3000

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
})

app.get('/erica', (req, res) => {
  res.send('Hello Erica');
})

app.listen(port, () => console.log('Server is listening on port', + port) );

var Main_word = ["e","r","i","c","a"];
var Users_Guess = ["","","","",""];
var Main_length = Main_word.length;

Main_length =  Users_Guess;

for (i = 0; i <= Main_length; i++) {
  if (User_Guess == Main_length) {
  Users_Guess += 1 [i]
  res.send("well done");
} else {
  res.send("Incorrect");
}}




