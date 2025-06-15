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

  interface Ival {
    (val: string, fg: number): void;
  }

  const dc: Ival = (val, fg) => {
    return (val = "dfdfd");
  };
  console.log(dc);

  //console.log(obj2);

  function furitess<T>(names: T): T {
    return names;
  }
  furitess("Apple");
  furitess(123);
  console.log(furitess(true));

  function user<T>(data: T): T {
    return data;
  }

  let u1 = user(["apple", "ab", 1, 3]);
  //console.log(u1);

  interface stu1 {
    name: string;
    email: string;
    roll: number;
    branch?: number;
  }

  const stuname: Partial<stu1> = {
    name: "Gunnu",
    email: "hainahi@gai.com",
  };

  function Getstu2(name: Partial<stu1>) {
    return name;
  }

  //console.log(Getstu2({ roll: 25 }));
  function Getstu3(name: Required<stu1>) {
    return name;
  }

  //console.log(Getstu3({ name: "Rachit", email: "abcd", roll: 25, branch: 25 }));

  const stu4: Readonly<stu1> = {
    name: "Rachit",
    email: "abcd",
    roll: 25,
    branch: 25,
  };
  //stu4.name="dfdf"
  //console.log(stu4.name);

  const stu5: Pick<stu1, "name" | "email"> = {
    name: "Baulaal",
    email: "abcd",
  };
  // console.log(stu5.name);
  const stu6: Omit<stu1, "name" | "email"> = {
    roll: 452,
    branch: 25,
  };
  //console.log(stu6.roll);

  return <div>Hello about page for TypeScript</div>;
}
