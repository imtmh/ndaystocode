class PersonClass {
  constructor(name) {
    this.name = name;
    this.city = "hyd";
  }

  constructor() {

  }

  sayHello() {
    console.log("Hello " + this.name);
  }
}

function Person(name) {

  this.name = name;
  this.city = "hyd";
}
let person1 = new Person1();
function Person2(name) {
  let newInstance = {};
  newInstance.name = name;
  newInstance.city = "hyd";
  return newInstance;
}

let person2 = Person2();

Person.prototype.sayHello = function () {
  console.log("Hello " + this.name);
};
let newPersonObject = new Person("Thirumalesh");

console.log(Person);
console.log(newPersonObject);

console.log(Function);

function Book() {
  let name = "test";
}

let book = new Book();
console.log(book);

let newFunction = new Function();
