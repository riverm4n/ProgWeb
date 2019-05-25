class IntegerSet {
  constructor(valor){
    this.valorObj = valor;
    this.conjunto = [];
    for(var counter = 0; counter < 100; counter++){ //Number.MAX_VALUE
      if(counter !== valor){
        this.conjunto[counter] = false;
      }
      else
        this.conjunto[counter] = true;
    }
  }

  insert (valor){
    console.log(valor + " foi inserido!");
    this.conjunto[valor] = true;
    this.stringConvert();
  }

  remover (valor){
    console.log(valor + " foi removido!");
    this.conjunto[valor] = false;
  }

  union (valor){
    var union_arr = [];
    for(var counter = 0; counter < this.conjunto.lenght; counter++){
      if(this.conjunto[counter] === true || valor.conjunto[counter] == true)
        union_arr[counter] = true;
      else
        union_arr[counter] = false;
    }

    var uniaoString = "[ ";
    for(var counter = 0; counter < union_arr; counter++){
      if(union_arr[counter] === true){
        uniaoString += counter + " ";
      }
    }

    uniaoString += " ]";
    console.log(uniaoString);

    return union_arr;
  }

  intersection (valor){
    var inter_arr = [];
    for(var counter = 0; counter < conjunto.lenght; counter++){
      if(this.conjunto[counter] === true && valor.conjunto[counter] === true){
        inter_arr[counter] = true;
      }
      else {
        inter_arr[counter] = false;
      }
    }

    return inter_arr;
  }

  difference (valor) {
    var diff_arr = [];
    for(var counter = 0; counter < this.conjunto.lenght; counter++){
      if(this.conjunto[counter] === true && valor.conjunto[counter] === false){
        diff_arr[counter] = true;
      }
      else if(this.conjunto[counter] === false && valor.conjunto[counter] === true){
        diff_arr[counter] = true;
      }
      else{
        diff_arr[counter] = false;
      }
    }
  }

  stringConvert (){
    var string = "Conjunto: [ ";

    for(var counter = 0; counter < this.conjunto.length; counter++){
      if(this.conjunto[counter] == true){
        string += counter + " ";
      }
    }

    string += "]";

    console.log(string);
    return string;
  }
}

dois = new IntegerSet(2);
dois.stringConvert();
dois.insert(4);
dois.insert(5);
dois.stringConvert();
dois.remover(4);
dois.stringConvert();

console.log("Novo conjunto: ");
sete = new IntegerSet(7);
sete.stringConvert();
sete.insert(9);
sete.insert(5);

console.log("União: ");
var array_Union = [];
array_Union = dois.union(sete);
