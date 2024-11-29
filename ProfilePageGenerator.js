import http from 'http';
import express from 'express';

const app = express();
const PORT = 3000;
const PORT2 = 3001;

// Home route
app.get('/', (req, res) => {
    res.send('Hey there User welcome to our Express.js server!');
});//Greets the user

app.get('/profile', (req, res) => {
  const name = req.query.name; // Extracts the name parameter 'query'
  const age = req.query.age;   // Extracts the age parameter 'query'
  
  res.send(`User's Name : ${name},  User's age: ${age}`);
  
});




// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});


