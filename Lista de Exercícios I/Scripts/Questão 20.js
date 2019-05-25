var botao = document.getElementById("button");

botao.onclick = function(){
  var radius = parseInt(document.getElementById("radius").value);

  var area = 2 * (radius * Math.PI);
  var circunferencia = Math.pow((radius * Math.PI), 2);

  document.getElementById("area").value = Math.round(area*100)/100;
  document.getElementById("circunferencia").value = Math.round(circunferencia*100)/100;

  return false;
}
