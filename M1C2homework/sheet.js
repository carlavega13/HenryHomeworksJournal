x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
   var x = 10;
   console.log(x);//10
   console.log(a);//8
   var f = function (a, b, c) {
      b = a;
      console.log(b);//8
      b = c;
      var x = 5;
   };
   f(a, b, c);
   console.log(b);//9
};
c(8, 9, 10);
console.log(b);//10
console.log(x);//1
///////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

console.log(bar); //undefined
// console.log(baz);//2
foo();
function foo() {
   console.log('Hola!');  //Hola!     
}
var bar = 1;
baz = 2;
///////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var instructor = 'Tony';
if (true) {
   var instructor = 'Franco';
}
console.log(instructor);//franco

var instructor = 'Tony';
console.log(instructor);//Tony
(function () {
   if (true) {
      var instructor = 'Franco';
      console.log(instructor);
   }
})();
console.log(instructor);


var instructor = 'Tony';
let pm = 'Franco';
if (true) {
   var instructor = 'The Flash';
   let pm = 'Reverse Flash';
   console.log(instructor);
   console.log(pm);
}
console.log(instructor);
console.log(pm);





console.log(6 / "3")
console.log("2" * "3")
console.log(4 + 5 + "px")
console.log("$" + 4 + 5)
console.log("4" - 2)
console.log("4px" - 2)
console.log(7 / 0)
console.log({}[0])
console.log(parseInt("09"))
console.log(5 && 2)
console.log(2 && 5)
console.log(5 || 0)
console.log(0 || 5)
console.log([3]+[3]-[10])
console.log(3>2>1)
console.log([] == ![])




function test() {
    console.log(a);
    console.log(foo());
 
    var a = 1;
    function foo() {
       return 2;
    }
 }
 
 test();




 var snack = 'Meow Mix';

function getFood(food) {
   if (food) {
      var snack = 'Friskies';
      return snack;
   }
   return snack;
}

getFood(false)//Meuw Mix





var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname;
      },
   },
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());


function printing() {
    console.log(1);
    setTimeout(function () {
       console.log(2);
    }, 1000);
    setTimeout(function () {
       console.log(3);
    }, 0);
    console.log(4);
 }
 printing()