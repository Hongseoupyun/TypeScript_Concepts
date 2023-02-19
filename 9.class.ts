// 1. Class

class carClass {
  color: string;
  constructor(color) {
    this.color = color;
  }
  start() {
    console.log("start");
  }
}

const honda = new carClass("red");

// 2. Access Modifeirs ; public, private, protected and static

/*
public : default, accessible in children class, class instance, outside of class
private : accessible only in class instance where it is defined
protected : accessible in children class only, not accessible in class instance eg) hyunday.color
static : accessible with class name, not with class instance or "this" keyword
*/

//public
class carClass2 {
  color: string;
  constructor(color: string) {
    this.color = color;
  }
  start() {
    console.log("start");
  }
}

//private
class carClass3 {
  private color: string;
  constructor(color: string) {
    this.color = color;
  }
  start() {
    console.log("start");
  }
}

class hyundai extends carClass3 {
  constructor(color: string) {
    super(color);
  }
  showColor() {
    // console.log(this.color); //error, this.color is not accessible because it is private
  }
}

//protected

class carClass4 {
  protected color: string;
  constructor(color: string) {
    this.color = color;
  }
  start() {
    console.log("start");
  }
}

class hyundai2 extends carClass4 {
  constructor(color: string) {
    super(color);
  }
  showColor() {
    console.log(this.color); //accessible because it is protected
  }
}

//static

class carClass5 {
  static color: string;
  constructor(color: string) {
    carClass5.color = color;
  }
  start() {
    console.log("start");
    //console.log(this.color); error, this.color is not accessible because it is static
  }
}

const hyundai3 = new carClass5("red");
console.log(carClass5.color); //accessible because it is static
//console.log(hyundai3.color); error , hyundai3.color is not accessible because it is static

//3. Abstract Class
//cannot be used with "new" keyword
//defined in class but implemented in children class where it is extended or inherited so that it will have different implementation in different children class in same name
//can be used with "extends" keyword ; inheritance

abstract class carClass6 {
  color: string;
  constructor(color: string) {
    this.color = color;
  }
  abstract start(): void;
}
//abstract class cannot be used with "new" keyword, it can be used with "extends" keyword
class hyundai4 extends carClass6 {
  constructor(color: string) {
    super(color);
  }
  //abstract method must be implemented in children class
  start() {
    console.log("start");
  }
}

class hyundai10 extends carClass6 {
  constructor(color: string) {
    super(color);
  }
  //abstract method must be implemented in children class, different implementation but same name
  start() {
    console.log("this is differnt start");
  }
}

//const hyundai5 = new carClass5("red"); error, cannot be used with "new" keyword
const hyundai5 = new hyundai4("red");
hyundai5.start();
