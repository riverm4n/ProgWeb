var http = require('http');

var server = http.createServer(function(req, res){ //Requisição(req) e Resposta a requisição (res)
  res.write("Instituto de Computação");
  res.end();
});

server.listen(3000);

// npm é o gerenciador de pacotes do node.js (professor recomendou o nodemon)
