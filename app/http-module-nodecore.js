// # Build HTTP services. Keep the list of customers in an array
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('World Hello')
    res.end();
  }

if (req.url === '/api/courses') {
  res.write(JSON.stringify([1, 2, 3]));
  res.end(); // this works  but its not maintainable when the server scales
}
});

server.listen(3000);

console.log('Listening on port 3000');

  )

/*
 This code is creating an http server with Node.js. It is listening on port 3000 and is responding to requests on the '/' and '/api/courses' paths. If the request is for the '/' path, it sends a response of 'world hello'. If the request is for the '/api/courses' path, it sends a response of a JSON string representing an array of numbers.

 */

