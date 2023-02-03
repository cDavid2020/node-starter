const express = require('express'); // load express module

const app = express (); // return a function, call it express

require('express');

express() //store the result in a const called app. it represents our application. application with useful methods like GET, POST, POST, DELETE. They correspond to HTTP methods


// app.get(`/`)   >>>  First part is a path or URL. Second part is a callback function thats called a route handler

app.get(`/`, (req, res) => {
  res.send('Hello, world!');)
});

app.listen(3000, (); => console.log('Listening on port 3000...'));

app.post()
app.put()
app.delete()


