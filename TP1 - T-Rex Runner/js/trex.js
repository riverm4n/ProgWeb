(function(){
  const FPS = 300; //Frames por segundo
  const PROB_NUVEM = 2;

  var gameLoop;
  var deserto;
  var dino;
  var nuvens = [];

  //Iniciar o loop infinito do jogo (terreno correndo)
  function init(){
    deserto = new Deserto();
    dino    = new Dino();
    gameLoop = setInterval(run, 1000/FPS); //Similar a co-routine
    //Como acabar com o jogo: clearInterval(gameLoop);
  }

  window.addEventListener("keydown", function(e){
    if(e.key == "ArrowUp")
      dino.status = 1;
  })

  function Deserto(){
    this.element = document.createElement("div"); //Criando novo elemento no HTML de forma dinâmica
    this.element.className = "deserto";
    document.body.appendChild(this.element); //Adicionando ao HTML

    //Adicionando o terreno do deserto:
    this.floor = document.createElement("div");
    this.floor.className = "floor";
    this.floor.style.backgroundPositionX = "0px";
    document.element.appendChild(this.floor); //Apendando como filho do Deserto.
  }

  //Objetivo: fazer a nuvem se mover para esquerda
  Nuvem.prototype.move = function(){
    this.element.style.right = (parseInt(this.element.style.right) + 1) + "px";
  }

  Deserto.prototype.mover = function(){
    //Move o deserto (background-position) 1 pixel para a esquerda por frame!
    this.floor.style.backgroundPositionX = (parseInt(this.floor.style.backgroundPositionX) - 1) + "px";
  }

  //Player
  function Dino(){
    this.sprites = {
      'correr1': '-766px';
      'correr2': '-810px';
      'pulando': '-678px';
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
      if(this.element.style.backgroundPositionX == this.sprites.correr1)
        this.element.style.backgroundPositionX = this.sprites.correr2;
      else
        this.element.style.backgroundPositionX = this.sprites.correr1;
    }
    else if(this.status == 1){
      this.element.style.backgroundPositionX = this.sprites.pulando;
      this.element.style.bottom = (parseInt(this.element.style.bottom + 1) + "px");

      if(this.element.style.bottom == this.maxHeight){
        this.status = 2;
      }
    }
    else if(this.status == 2){
      this.element.style.bottom = (parseInt(this.element.style.bottom) - 1 + "px");
    }
  }

  function Nuvem(){
    this.element = document.createElement("div");
    this.element.className = "nuvem";
    this.element.style.right = "0px";
    this.element.style.top = Math.floor(Math.random() * 120) + "px";
    deserto.element.appendChild(this.element);
  }

  function run(){
    dino.correr();
    deserto.mover();
    nuvens.push(new Nuvem());

    if(Math.floor(Math.random()*1000) <= PROB_NUVEM){
      nuvens.forEach(function(n){
        n.mover();
      });
    }

    //Em caso de colapso, acabar com o jogo.
  }

  init();
})();
