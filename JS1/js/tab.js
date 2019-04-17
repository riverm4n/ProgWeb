for(var e = 1; e <= 10; e++){
  document.write("<table border='1'>");
  document.write("<th colspan =2> Produtos de " + e + "</th>");
  //document.write("<tbody>")

  for(var i = 1; i <= 10; i++){
    document.write("<tr><td>" + e + "x" + i + "</td><td>" + i*e + "</td>");
  }

  document.write("</table>");
}
