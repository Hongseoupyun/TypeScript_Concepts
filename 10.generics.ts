// 1. generic
//generic is when you don't know the type of the variable when it is defined, but you know the type when you use it like below

function getLength<T>(arr: T[]): number {
  return arr.length;
}

getLength<number>([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); //correct
getLength<string>(["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]); //correct
getLength<object>([
  { 1: 1 },
  { 2: 2 },
  { 3: 3 },
  { 4: 4 },
  { 5: 5 },
  { 6: 6 },
  { 7: 7 },
  { 8: 8 },
  { 9: 9 },
  { 0: 0 },
]); //correct
// getLength("alksjflkjs") error

// 2. generic interface

interface Human <T>{
  name: string;
  age: number;
  option: T;
}

const h1: Human<object> = {
  name: "John",
  age: 20,
  option:{
    a: 1,
    b: 2,
  }
}
const h2 : Human<string> = {
  name: "John",
  age: 20,
  option: "option"
}
