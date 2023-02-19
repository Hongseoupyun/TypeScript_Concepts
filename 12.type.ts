// 1. type
// type is a new way to define a type in typescript


type TypeA = {
  a: string;
  b: number;
}

type TypeB = {
  c: string;
  d: number;
}

// let y : TypeA & TypeB = {
//   a: "a",
//   b: 1,
//   c: "c",
// } // this will give an error because d is missing

let y : TypeA & TypeB = {
  a: "a",
  b: 1,
  c: "c",
  d: 2
}