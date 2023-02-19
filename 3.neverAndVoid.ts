//1. void, never
//void is when function returns nothing
function voidFunc(): void {
  console.log("This function returns nothing");
}

//never is when function always throws an error or never returns/ends
function neverFunc(): never {
  throw new Error("This function always throws an error");
}
function nerverFunc2(): never {
  while (true) {
    console.log("This function never ends");
  }
}
