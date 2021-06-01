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

var Guessing_word = ["e","r","i","c","a"];
var Users_Guess = ["","","","",""];

var Guessing_word = word.length;
res.send(Guessing_word);
