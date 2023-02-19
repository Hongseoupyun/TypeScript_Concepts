//1. function

// define type of parameter and return value
function isChild(age: number): boolean {
  return age < 18;
}
function multiply(num1: number, num2: number): void {
  console.log(num1 * num2);
}
function hello(name?: string): void {
  console.log(`Hello ${name || "world"}`);
}

hello();
hello("Eunice"); //correct
//hello(13) => This will throw an error as the type of hello is void

//the ... in parameter means that the argument can be an array of numbers, so the type of parameter is number[]
function addNumbersinArr(...nums: number[]): number {
  return nums.reduce((a, b) => a + b, 0);
}
addNumbersinArr(1, 2, 3, 4, 5); //15
addNumbersinArr(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); //55

// 2. this in function

interface User {
  name: string;
  age: number;
}

const sam: User = {
  name: "sam",
  age: 27,
  
};

function showName(this: User, age: number, occupation: string): void {
  console.log(this.name, age, occupation);
}

const a = showName.bind(sam);
a(27, "Designer"); //sam 27 Designer

// 3. function overload (overload is not supported in arrow function) is when making multiple functions with the same name but different parameters

function join(name: string, age: number): string;
function join(name: string, age: number): User;
function join(name: string, age: number | string): User | string {
  if (typeof age == "number") {
    return {
      name,
      age,
    };
  } else {
    return "use number to write age";
  }
}
