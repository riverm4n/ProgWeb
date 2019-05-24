/* • Desenvolva um programa que aceita o nome de um diretório
como parâmetro, então cria um servidor Web capaz de
retornar uma página contendo a lista de arquivos e
subdiretórios do diretório informado  */

var filesystem = require('fs')
var http = require('http');

var folderName = process.argv[2];
var arquivos = filesystem.readdirSync(folderName);

var server = http.createServer(function(req, res){
  res.end(arquivos.join("\n"));
});

server.listen(3000);
