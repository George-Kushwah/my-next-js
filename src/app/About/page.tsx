import React from "react";

export default function About() {
  interface IChekprops {
    name: string;
    age: number;
  }

  const myobj1: IChekprops = { name: "Gunnu", age: 7 };
  let a1: unknown;
  a1 = "12";
  a1 = 10;
  //console.log(a1);
  //console.log(myobj1);
  function foo1(): never {
    while (true) {
      console.log("Infinite run");
    }
  }
  //foo1();
  //console.log("object");

  enum Direction {
    tp = "Top",
    lf = "Left",
    rt = "Right",
    dw = "Bottom",
  }
  //console.log(Direction.tp);
  let a2: string | null | number;
  a2 = 12;
  type classes = {
    name: string | null;
  };
  type stuna = {
    age: number;
  };
  type mixs = classes & stuna;

  let a3: mixs = {
    name: "George",
    age: 4,
  };
  //console.log(a3);
  type Hunma = {
    name: string;
    age: number;
    city: string;
  };
  let obj2: Hunma = {
    name: "Gunnu",
    age: 7,
    city: "Jaipur",
  };

  interface food {
    name: string;
    price: number;
  }
  interface lable extends food {
    color: string;
  }
  const foo2 = (price: lable) => {
    price.color = "Red";
  };
  //console.log(foo2);

  class pendrive {
    private company: string;
    constructor(name: string) {
      this.company = name;
    }
    protected getval() {
      console.log(this.company);
    }
  }

  let com1 = new pendrive("HP");
  console.log(com1);
  let com2 = new pendrive("Sandisk");
  console.log(com2);
  //com2.getval();

  //console.log(obj2);
  return <div>Hello about page for TypeScript</div>;
}
