const http = require('http');
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
  }
  else if(page =='/api'){
    if ("pali" in params){
      let userInput = document.querySelector('.userInput').value
      if(params['pali'] == `${userInput}`)
      console.log(userInput)
      let algor = userInput.toLowerCase() === userInput.toLowerCase().split('').reverse().join('') ? 'Palindrome!' : 'Not a palindrome'
      res.writeHead(200, {'Content-Type': 'application/json'})
      res.write(data)
      const objToJson = {
        result: algor
      }
      res.end(JSON.stringify(objToJson))
    }
  }
});

server.listen(8001);
