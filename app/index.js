const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('world hello');

});

app.get('/api/courses', (req, res) => {

});

app.listen(3000, () => console.log('Listening on port 3000...'));
  res.send([1, 2, 3, 4]); // an array of 3 numbr

// Node & Express js REST API

// Request

GET /api/customers

// Response

[
  {id:1, name: 'John', age:}
  {id:2, name: 'Bert', age:}
  ...
]

// an array of customers👆

// Request

PUT /api/customers/1 // represents customer with completed properties

{ name: 'Customer }



//👇the server updates the customer in the Response object
// Response

{id:1, name: 'John', age:}

// DELETE A CUSTOMER

// Request
POST / api/customers

{ name: 'John', age:}

// DELETE /api/customers/{id}
// The delete part can be left blank unlike 👆



// Response

re