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


/*first I began my assigning my variables for to guessing word and the users guesses. 
the 'User_Guess' was created adding no current value as it can also be read as undefined
on the JavaScript system*/
var Main_word = ["e","r","i","c","a"];
var Users_Guess = ["","","","",""];
var Main_length = Main_word.length;

/*I then assigned the users guess to be the same as the guessing word by applying tnhe word
length to be the same*/ 
Main_length =  Users_Guess;

/*in order fot the user to actually play the game i had made sure to apply a prompt 
so that the user could interact with my game*/
User_Guess = prompt;

/* the while loop was created to take action mainly if the user was to get the answer
right. if they had, then 1 word would be added to the 'User_Guess' and then the loop would continue*/
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

/* here i had assigned a 'guess' for the amount of times a use guesses and a 'count' which is the 
amount of times a user gets to guess. in this case the guess and count would be classified as the 
same value*/
var guess = 5 ;
var count = 5 ;


/*in this part of the code, i had implemented 5 for loops for the process of the user getting their 
answer wrong in 5 different stages (considering the max count is 5*/
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


/* for the final part of this process, i had established text that the reciever would recieve
if they had won of lost the game*/
if (Main_word === Users_Guess)
res.write('Congratulations' + 'You win')

elseif (Main_word !== Users_Guess)
res.write("Oh no!" + "<br>" + "You've Lost")
