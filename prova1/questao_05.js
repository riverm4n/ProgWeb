// David: Código implementado corretamente 
// Nota: 2.0

class Empregado{
  constructor (nome, salario){
    this.nome = nome;
    this.salario = salario;
  }

  setNome (nome) {
    this.nome = nome;
  }

  setSalario (salario){
    if(salario < 0){
      this.salario = 0.0;
    }
    else {
      this.salario = salario;
    }
  }

  getNome (){
    return this.nome;
  }

  getSalario (){
    return this.salario;
  }
}

var empregado1 = new Empregado("John", 1500);
var empregado2 = new Empregado("Bob", 2000);
console.log("Salário inicial de " + empregado1.getNome() + ": R$" + empregado1.getSalario());
console.log("Salário inicial de " + empregado2.getNome() + ": R$" + empregado2.getSalario());

empregado1.setSalario(empregado1.getSalario() * 1.1);
empregado2.setSalario(empregado2.getSalario() * 1.1);

console.log("Salário final de " + empregado1.getNome() + ": R$" + Math.round(empregado1.getSalario()));
console.log("Salário final de " + empregado2.getNome() + ": R$" + Math.round(empregado2.getSalario()));
