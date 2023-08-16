// current directory
// console.log( __dirname );

const names = require('./index.js');

function sayHi(name) {
  console.log(`Hi ${name}`);
}

sayHi(names.john);
console.log(names);

const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write(`Here is the home page`);
    res.end();
  } else if (req.url === '/about') {
    res.end('Here is a little bit of our history');
  } else {
    res.end(`
        <h1>Oops</h1>
        <p>Sorry page not found</p>
        <a href="/">Back to home page</a>
      `);
  }
});

server.listen(5000);
