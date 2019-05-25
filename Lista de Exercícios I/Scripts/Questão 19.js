(function(){
  function foo(x){
    var baz = 3;
    return function (y){
      console.log(x + y + (++baz));
    }
  }

  var moo = foo(2); //moo agora é um closure.
  moo(1); //7
  moo(1); //8
})();
