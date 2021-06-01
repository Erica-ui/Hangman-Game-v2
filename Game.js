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

User_Guess = prompt 


for (i = 0; i <= Main_length; i++) {
  if (User_Guess == Main_length) {
  Users_Guess += 1 [i]
  res.write("well done!");
  res.end();
} else {
    res.write("Incorrect!");
    res.end();
    break;
}}

var guess = 5 ;
var count = 5 ;

for (i = 4, i <= guess, i <= count; i++;) {
  if (guess == count && Users_Guess != Main_length); 
  count += [i]
  guess += [i]
  res.write('Incorrect' + 'You have 4 guesses left')
}


var guess = 4 ;
var count = 4 ;

for (i = 3, i <= guess, i <= count; i++;) {
  if (guess == count && Users_Guess != Main_length); 
  count += [i]
  guess += [i]
  res.write('Incorrect' + 'You have 3 guesses left')
}


var guess = 3 ;
var count = 3 ;

for (i = 3, i <= guess, i <= count; i++;) {
  if (guess == count && Users_Guess != Main_length); 
  count += [i]
  guess += [i]
  res.write('Incorrect' + 'You have 2 guesses left')
}



var guess = 2 ;
var count = 2 ;

for (i = 1, i <= guess, i <= count; i++;) {
  if (guess == count && Users_Guess != Main_length); 
  count += [i]
  guess += [i]
  res.write('Incorrect' + 'You have 1 guess left')
}



var guess = 1 ;
var count = 1 ;

for (i = 0, i <= guess, i <= count; i++;) {
  if (guess == count && Users_Guess != Main_length); 
  count += [i]
  guess += [i]
  res.write('Incorrect' + 'You have 0 guesses left')
}


  



