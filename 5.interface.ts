//1. Interface
// interface is a new way to define a type in typescript
let user: object;
user = {
  name: "Eunice",
  age: 27,
};

console.log(user["name"]); //correct
//console.log(user.name) => This will throw an error as the type of user is object and it does not have a name property, use interface in this case

type Score = "A" | "B" | "C" | "D" | "E" | "F";
interface User2 {
  name: string;
  age: number;
  gender?: string; //optional property
  readonly birthYear?: number;
  [key: number]: Score;
}
//if you redefine the interface it will automatically extends the previous interface
interface User2 {
  height: number;
}

//hence, user2 should have height property
let user2: User2 = {
  name: "Eunice",
  age: 27,
  1: "A",
  2: "B",
  height: 170,
};

user2.name = "Yireh"; //correct
user2.age = 1; //correct
// user2.birthYear = 1993; => This will throw an error as birthYear is a readonly property

interface Add {
  (num1: number, num2: number): number;
}
const add: Add = function (x, y) {
  return x + y;
};
add(1, 2); // 3
//add (1,2,3) => This will throw an error as the type of add is Add
// add("hello", "world"); => This will throw an error as the type of add is Add

interface IsAdult {
  (age: number): boolean;
}
const isAdult: IsAdult = function (age) {
  return age > 18;
};
isAdult(27); //true
isAdult(1); //false
// isAdult("hello"); => This will throw an error as the type of isAdult is IsAdult
