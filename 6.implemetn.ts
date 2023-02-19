//1. implements

interface Car {
  color: string;
  wheels: number;
  start(): void;
}

class BMW implements Car {
  constructor(color: string, wheels: number) {
    this.color = color;
    this.wheels = wheels;
  }
  color: string;
  wheels: number;
  start(): void {
    console.log("BMW started");
  }
}
const myCar = new BMW("red", 4);
console.log(myCar.wheels); //4
console.log(myCar.color); //red

//2. extends

interface Tesla extends Car {
  color: string;
  wheels: number;
  start(): void;
  autoPilot: boolean;
}
interface toy {
  name: string;
  price: number;
}

interface toyTesla extends Tesla, toy {
  name: string;
  price: number;
  autoPilot: boolean;
}
