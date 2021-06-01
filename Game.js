const express = require('express')
const port = 3000

// const server = http.createServer();
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
})

app.listen(port, () => console.log('Server is listening on port', + port) );
// server.listen(port, function (error) {
//   if (error) {
//     console.log('Something went wrong', error)
//   } else {
//     console.log('Server is listening on port', + port)
//    } 
// });