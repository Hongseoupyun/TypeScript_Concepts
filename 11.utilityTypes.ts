// 1. key of

interface Laptop {
  name: string;
  price: number;
  brand: string;
}

type laptopKey = keyof Laptop; // "name" | "price" | "brand"
const lKey = "name"; //correct
// const 1key = "nasf"; //error

// 2. partial
//make all properties optional

// brand is not essential dueto partial
const someLaptop: Partial<Laptop> = {
  name: "asus",
  price: 1000,
};

// 3. Required
// make all properties required

interface Laptop2 {
  brand: string;
  name?: string;
  price?: number;
}

// name and price are required due to required
const someLaptop2: Required<Laptop> = {
  name: "asus",
  price: 1000,
  brand: "asus",
};

// 4. Readonly
// make all properties readonly

interface Laptop3 {
  brand: string;
  name: string;
  price: number;
}

let someLaptop3: Readonly<Laptop3> = {
  name: "asus",
  price: 1000,
  brand: "asus",
};

//someLaptop3.prce = 2000; error because of readonly

// 5. Record <K,T> ; <key, type>
// Record is a generic type that takes two types as arguments K and T. K specifies the set of properties names of the resulting type and T specifies the type of the property values.

type Score = "A" | "B" | "C" | "D" | "F";
type Grade = "1" | "2" | "3" | "4";

const score: Record<Grade, Score> = {
  "1": "A",
  2: "B",
  3: "C",
  4: "D",
};

interface Laptop4 {
  id: number;
  name: string;
  price: number;
}

function isValid(laptop: Laptop4) {
  const result: Record<keyof Laptop4, boolean> = {
    id: laptop.id > 0,
    name: laptop.name.length > 0,
    price: laptop.price > 0,
  };
  return result;
}

// 6. Pick <T, K>
// Pick is a generic type that takes two types as arguments T and K. T specifies the type of the object from which properties are picked. K specifies the set of properties names of the resulting type.

interface Laptop5 {
  id: number;
  name: string;
  price: number;
}

type Laptop5Name = Pick<Laptop5, "name">; // {name: string}
type Laptop5NameAndPrice = Pick<Laptop5, "name" | "price">; // {name: string, price: number}

const admin: Pick<Laptop5, "id" | "name"> = {
  id: 1,
  name: "asus",
};

// 7. Omit <T, K>
//remove properties from an object
// Omit is a generic type that takes two types as arguments T and K. T specifies the type of the object from which properties are omitted. K specifies the set of properties names of the resulting type.

//omits id and name, so price is the only property
const admin2: Omit<Laptop5, "id" | "name"> = {
  price: 1000,
};

// 8. Exclude <T1, T2>
//remove types from a union
// Exclude is a generic type that takes two types as arguments T1 and T2. T1 specifies the type from which types are excluded. T2 specifies the set of types to be excluded from T1.

type T1 = string | number | boolean;
type T2 = Exclude<T1, number>; // string | boolean

// 9. NonNullable <T>
//remove null and undefined from a union
// nonNullable is a generic type that takes one type as argument T. T specifies the type from which null and undefined are removed.

type T3 = string | number | null | undefined;
type T4 = NonNullable<T3>; // string | number

// 10. ReturnType <T>
//get the return type of a function
// ReturnType is a generic type that takes one type as argument T. T specifies the type of the function from which return type is extracted.

function add(a: number, b: number) {
  return a + b;
}

type T5 = ReturnType<typeof add>; // number

