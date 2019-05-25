var fullname = "John Doe";

var obj = {
  fullname: "Colin Thrig",
  prop: {
    fullname: "Aurelio de Rosa",
    getFullname: function(){
      return this.fullname;
    }
  }
};

console.log(obj.prop.getFullname());
var test = obj.prop.getFullname;
console.log(test());
