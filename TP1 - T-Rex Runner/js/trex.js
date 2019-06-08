(function(){
  const FPS = 300; //Frames por segundo.
  const PROB_NUVEM  = 2; //Constante responsável pelo controle do spawn de nuvem.
  const PROB_CACTUS = 1; //Constante responsável pelo controle do spawn do cacto.
  const PROB_PTERO  = 0.75; //Constantes responsável pelo controle do spawn do pterodátilo.

  var gameLoop;
  var ambientLoop;
  var deserto;
  var dino;
  var terrainSpeed = 1; //velocidade do terreno, a cada 1000 frames, esse valor é multiplicado
  var frameCounter;
  var speedLoop;
  var nuvens = [];
  var cactus = [];
  var pteros = [];
  var dayNight = 0; //0 - Dia, 1 - Noite;

  //Iniciar o loop infinito do jogo (terreno correndo)
  function init(){
    deserto     = new Deserto();
    dino        = new Dino();
    gameLoop    = setInterval(run, 1000/FPS); //Similar a co-routine
    ambientLoop = setInterval(nightShift, 60000); //Troca do dia para a noite a cada 60 segundos.
    speedLoop   = setInterval(faster, (1000/FPS)*1000);
  }

  window.addEventListener("keydown", function(e){
    if(e.key == "ArrowUp" && dino.status==0)
      dino.status = 1;
    if(e.key == "ArrowDown" && dino.status==0)
      dino.status = 3;
  })

  window.addEventListener("keyup", function(e){
    if(e.key == "ArrowDown" && dino.status==3)
      dino.status = 0;
  })

  function Deserto(){
    this.element = document.createElement("div"); //Criando novo elemento no HTML de forma dinâmica
    this.element.className = "deserto";
    document.body.appendChild(this.element); //Adicionando ao HTML

    //Adicionando o terreno do deserto:
    this.floor = document.createElement("div");
    this.floor.className = "floor";
    this.floor.style.backgroundPositionX = "0px";
    this.element.appendChild(this.floor); //Apendando como filho do Deserto.
  }

  Deserto.prototype.mover = function(){
    //Move o deserto (background-position) 1 pixel para a esquerda por frame!
    this.floor.style.backgroundPositionX = (parseInt(this.floor.style.backgroundPositionX) - terrainSpeed) + "px";
  }

  //Player
  function Dino(){
    this.sprites = {
      'correr1': '-765px',
      'correr2': '-809px',
      'pulando': '-677px',
      'agachar1': '-941px',
      'agachar2': '-1000px',
    };

    this.status  = 0; // 0: Correndo, 1: Subindo, 2: Descendo, 3: Agachado.
    this.maxHeight = "80px";
    this.element = document.createElement("div");
    this.element.className = "dino";
    this.element.style.backgroundPositionX = this.sprites.correr1;
    this.element.style.bottom = "0px";
    deserto.element.appendChild(this.element);
  }

  //Animação do Dino:
  Dino.prototype.correr = function(){
    if(this.status == 0){
      this.element.style.width = "44px";
      if(this.element.style.backgroundPositionX == this.sprites.correr1){
        this.element.style.backgroundPositionX = this.sprites.correr2;
      }
      else{
        this.element.style.backgroundPositionX = this.sprites.correr1;
      }
    }
    else if (this.status == 1) {
      this.element.style.width = "44px";
      this.element.style.backgroundPositionX = this.sprites.pulando;
      this.element.style.bottom = (parseInt(this.element.style.bottom) + 1) + "px";
      if (this.element.style.bottom == this.maxHeight) this.status = 2;
    }
    else if(this.status == 2){
      this.element.style.width = "44px";
      this.element.style.bottom = (parseInt(this.element.style.bottom) - 1 + "px");
      if(this.element.style.bottom == "0px") this.status = 0;
    }
    else if(this.status == 3){
      this.element.style.width = "59px";
      if(this.element.style.backgroundPositionX == this.sprites.agachar1){
        this.element.style.width = "60px";
        this.element.style.backgroundPositionX = this.sprites.agachar2;
      }
      else
        this.element.style.backgroundPositionX = this.sprites.agachar1;
    }
  }

  function Nuvem(){
    this.element = document.createElement("div");
    this.element.className = "nuvem";
    this.element.style.right = "0px";
    this.element.style.top = Math.floor(Math.random() * 120) + "px";
    deserto.element.appendChild(this.element);
  }

  //Objetivo: fazer a nuvem se mover para esquerda
  Nuvem.prototype.mover = function(){
    this.element.style.right = (parseInt(this.element.style.right) + terrainSpeed) + "px";
  }

  function Cactus(tipo){
    this.cactuses = {
      'small1': '-228px',
      'small2': '-246px',
      'small3': '-262px',
      'small4': '-279px',
      'huge1': '-332px',
      'huge2': '-357px',
      'huge3': '-382px',
    }

    this.element = document.createElement("div");
    this.element.className = "cactus";

    //Seleção entre os sprites dos cactos.
    switch(tipo){
      case 0:
        this.element.style.width  = "17px";
        this.element.style.height = "35px";
        this.element.style.backgroundPositionX = this.cactuses.small1;
        break;
      case 1:
        this.element.style.width  = "17px";
        this.element.style.height = "35px";
        this.element.style.backgroundPositionX = this.cactuses.small2;
        break;
      case 2:
        this.element.style.width  = "17px";
        this.element.style.height = "35px";
        this.element.style.backgroundPositionX = this.cactuses.small3;
        break;
      case 3:
        this.element.style.width  = "17px";
        this.element.style.height = "35px";
        this.element.style.backgroundPositionX = this.cactuses.small4;
        break;
      case 4:
        this.element.style.width  = "25px";
        this.element.style.height = "50px";
        this.element.style.backgroundPositionX = this.cactuses.huge1;
        break;
      case 5:
        this.element.style.width  = "24px";
        this.element.style.height = "50px";
        this.element.style.backgroundPositionX = this.cactuses.huge2;
        break;
      case 6:
        this.element.style.width  = "25px";
        this.element.style.height = "50px";
        this.element.style.backgroundPositionX = this.cactuses.huge3;
        break;
    }

    this.element.style.right  = "0px";
    this.element.style.bottom = "0px";
    deserto.element.appendChild(this.element);
  }

  Cactus.prototype.mover = function(){
    this.element.style.right = (parseInt(this.element.style.right) + terrainSpeed) + "px";
  }

  function Pterodatylus(altura){
    var status = 0;
    this.element = document.createElement("div");
    this.element.className = "ptero";

    this.element.style.right  = "0px";
    this.element.style.bottom = altura;
    deserto.element.appendChild(this.element);
  }

  Pterodatylus.prototype.mover = function(){
    //Animação do pterodátilo
    if(this.status == 0){
      this.element.style.backgroundPositionX = "-180px";
      this.element.style.height = "30px";
      this.status = 1;
    }
    else{
      this.element.style.backgroundPositionX = "-133px";
      this.status = 0;
    }

    this.element.style.right = (parseInt(this.element.style.right) + terrainSpeed) + "px";
  }

  function run(){
    dino.correr();
    deserto.mover();

    if(Math.floor(Math.random()*1000) <= PROB_NUVEM){
      nuvens.push(new Nuvem());
    }

    nuvens.forEach(function(n){
      n.mover();
    });

    var randCactus = Math.floor(Math.random()*1000); //Adicionado a uma variável para que possam ser gerados casos em que o cacto vem em grupo
    if (randCactus <= PROB_CACTUS){
      var tipo = Math.round(Math.random() * 6);
      cactus.push(new Cactus(tipo));

      /*if(randCactus <= 1.5){
        setTimeout(function(){
          cactus.push(new Cactus(tipo));
        }, 2000);*/
      }

    //Para depois: Implementar método de controle de distância mínima para spawn de cacto e de pterodátilo.
    cactus.forEach(function(n){
      n.mover();
    });

    //Spawn de Pterodátilos
    if(Math.floor(Math.random()*1000) <= PROB_PTERO){
      var pteroHeight = Math.floor(Math.random() * 4);
      var altura = "";

      switch(pteroHeight){
        case 1:
          altura = "125px";
          break;
        case 2:
          altura = "70px";
          break;
        case 3:
          altura = "25px";
          break;
      }

      pteros.push(new Pterodatylus(altura));
    }

    pteros.forEach(function(n){
      n.mover();
    });

    //Em caso de colapso, acabar com o jogo.
    //Como acabar com o jogo: clearInterval(gameLoop);
  }

  function nightShift(){
    if(dayNight == 0){
      document.body.style.backgroundColor = "black";
      dayNight = 1;
    }
    else{
      document.body.style.backgroundColor = "white";
      dayNight = 0;
    }
  }

  function faster(){
    terrainSpeed += 0.05;
  }

  init();
})();
