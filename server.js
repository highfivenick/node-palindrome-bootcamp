const http = require('http'); //telling server toget access to the network
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');

const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/style.css'){
    fs.readFile('style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/main.js'){
    fs.readFile('main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else if (page == '/api') {
    if ('pali' in params) {
      let userInput = params["pali"];
      let word = `${userInput}`;
      let algor = word.toLowerCase() === word.toLowerCase().split('').reverse().join('') ? 'palindrome' : 'Not a palindrome';
      res.writeHead(200, {"Content-Type": "application/json"});
      const objToJson = {
        result: algor,
      };
      res.end(JSON.stringify(objToJson))
    }
  }
});

server.listen(8000);