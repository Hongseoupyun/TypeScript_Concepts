//1. variable declaration
let car: string = "BMW";
let age: number = 27;
let is30s: boolean = false;
let a: number[] = [1, 2, 3, 4, 5];
let a2: Array<number> = [1, 2, 3, 4, 5];
let family: string[] = ["Eunice", "Yireh"];
let n: null = null; //correct
let u: undefined = undefined; //correct

car = "tesla"; //correct
a.push(6); //correct
// family.push(3); => This will throw an error
// car = 3; => This will throw an error
// age = "twenty seven"; => This will throw an error
// n = 3 => This will throw an error

//2. Variable declaration in function parameters
function add(num1: number, num2: number) {
  return num1 + num2;
}

add(5, 10); //correct
// add("hello", "world"); => This will throw an error

function showItems(arr: number[]) {
  arr.forEach((item) => {
    console.log(item);
  });
}

showItems([1, 2, 3, 4, 5]); //correct
// showItems(["hello", "world"]); => This will throw an error
