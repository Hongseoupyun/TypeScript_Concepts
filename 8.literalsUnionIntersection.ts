// 1. Literal Types

import { getConfigFileParsingDiagnostics } from "typescript";

const userName1 = "Bob";
let userName2: string | number = "Tom";

userName2 = 3; //correct

type job = "designer" | "developer" | "teacher";

interface User3 {
  name: string;
  job: job;
}

const user3: User3 = {
  name: "Simon",
  job: "developer",
};

// 2. Union Types; working as a "or"

interface HighSchoolStudent {
  name: string;
  grade: 1 | 2 | 3;
}

interface vehicle {
  name: "vehicle";
  color: string;
  start(): void;
}

interface mobile {
  name: "mobile";
  color: string;
  call(): void;
}

function getGift(gift: vehicle | mobile) {
  // gift.call(); this will throw an error as gift is of type vehicle | mobile and it does not have a call method
  console.log(gift.color);
  if (gift.name === "mobile") {
    gift.call();
  } else {
    gift.start();
  }
}

// 3. Intersection Types; working as a "and"

interface Automobie {
  name: string;
  start(): void;
}

interface Toy2 {
  name: string;
  color: string;
  price: number;
}

const toyCar2: Toy2 & Automobie = {
  name: "toyCar",
  start() {
    console.log("start");
  },
  color: "red",
  price: 1000,
};
