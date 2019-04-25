var options = [
  "1 - Pedra",
  "2 - Papel",
  "3 - Tesoura"
];

var results = [
  "Você venceu!",
  "Você perdeu :(",
  "A rodada terminou empatada"
];

var yourPoints = 0;
var gameOver   = false;

do{
  var input = parseInt(prompt("Escolha a sua jogada: \n" + options[0] + "\n" + options[1] + "\n" + options[2] + "\n") - 1);

  document.writeln("</br>-------------------------------------------------------------</br>");
  document.writeln("Escolha a sua jogada: </br>" + options[0] + "</br>" + options[1] + "</br>" + options[2] + "</br>");

  document.writeln("-------------------------------------------------------------</br>");
  document.writeln("A sua jogada foi: " + options[input] + "</br>");
  var computersTurn = Math.random()*3;
  computersTurn = Math.ceil(computersTurn) - 1;
  document.writeln("Jogada do computador: " + options[computersTurn] + "</br>");
  document.writeln("-------------------------------------------------------------</br>");

  var diff = input - computersTurn;

  switch (input) {
    case 0: //Pedra
      if(diff == 0) //Pedra x Pedra
        document.writeln(results[2] + "</br> Sua pontuação: " + yourPoints);
      else if(diff == -1){ //Pedra x Papel
        document.writeln(results[1] + "</br> Sua pontuação: " + yourPoints + "</br> Fim de Jogo =(");
        gameOver = true;
      }
      else if(diff == -2){ //Pedra x Tesoura
        yourPoints = yourPoints + 1;
        document.writeln(results[0] + "</br> Sua pontuação: " + yourPoints);
      }
      break;
    case 1: //Papel
      if(diff == 0) //Papel x Papel
        document.writeln(results[2] + "</br> Sua pontuação: " + yourPoints);
      else if(diff == -1){ //Papel x Tesoura
        document.writeln(results[1] + "</br> Sua pontuação: " + yourPoints + "</br> Fim de Jogo =(");
        gameOver = true;
      }
      else if(diff == 1){ //PApel x Pedra
        yourPoints = yourPoints + 1;
        document.writeln(results[0] + "</br> Sua pontuação: " + yourPoints);
      }
      break;
    case 2: //Tesoura
      if(diff == 0) //Tesoura x Tesoura
        document.writeln(results[2] + "</br> Sua pontuação: " + yourPoints);
      else if(diff == -2){ //Tesoura x Pedra
        document.writeln(results[1] + "</br> Sua pontuação: " + yourPoints + "</br> Fim de Jogo =(");
        gameOver = true;
      }
      else if(diff == -1){ //Tesoura x Papel
        yourPoints = yourPoints + 1;
        document.writeln(results[0] + "</br> Sua pontuação: " + yourPoints);
      }
      break;
    default:
      gameOver = true;
      document.writeln("Entrada inválida, você perdeu =(");
  }
}while(gameOver == false)
