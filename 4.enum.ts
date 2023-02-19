//1. enum/enumarated type (a set of named constants)
enum Color {
  Red,
  Green,
  Blue,
}
console.log(Color.Red); //0
console.log(Color.Green); //1

enum Color2 {
  white = 10,
  black,
  grey,
}
console.log(Color2.black); //11
console.log(Color2[10]); //white
console.log(Color2["white"]); //10

let myColor: Color = Color.Green; //correct
// let  myColor2 :Color = window // => This will throw an error
