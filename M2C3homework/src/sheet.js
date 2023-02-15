var matchFunctionMaker = function (selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  switch (selectorType) {
    case "id":
      matchFunction = (elemento) =>
        elemento.id === selector.slice(1, selector.length);
      break;
    case "class":
      matchFunction = (elemento) =>
        elemento.classList.contains(selector.slice(1, selector.length));
      break;
    case "tag":
      matchFunction = (elemento) => elemento.tagName.toLowerCase() === selector;
      break;
    case "tag.name":
      matchFunction = (e) => {
        let [tag, clas] = selector.split(".");
        if (matchFunctionMaker(tag)(e) && matchFunctionMaker("." + clas)(e))
          return true;
        return false;
      };
      break;
    default:
      break;
  }
  return matchFunction;
};
let a = document.createElement("div");
console.log(matchFunctionMaker("tag")(a));

// function lala(a) {
//     let clas
//     let tag=""
//     for (let i = 0; i < a.length; i++) {
//         console.log(a[i]);
// if(a[i]==="."){
//     clas=a.slice(i+1,a.length)
//     console.log(clas);
//     break
// }
// tag+=a[i]

// }
// console.log(tag)
// }
// console.log(lala(a));
// let x="hola.carla"
// let c
// c=x.slice(1+1,x.length)
// console.log(c);
