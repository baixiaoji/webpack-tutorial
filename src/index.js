// import _ from "lodash"
// import "./style.css"
// import Img from "./vim.jpg"
// import Person from "./es6.js"
// function component() {
//   var element = document.createElement('div');

//   // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//   element.classList.add("hello")

//   var myImg = new Image()
//   myImg.src = Img
//   element.appendChild(myImg)

//   return element;
// }
// Person.sayHi()
// document.body.appendChild(component());
class Person {
  static sayHi(){
      console.log("hi")
  }
}
Person.sayHi()