import React from "react";

function TypePage() {
  type fruits = {
    name: string;
    color: string;
  };
  type frprice = {
    mrp: number;
  };

  type mixf = fruits & frprice;
  const packet: mixf = {
    name: "Apple",
    color: "Red",
    mrp: 1452,
  };
  const frname: Partial<fruits> = {
    name: "Orange",
  };
  //console.log(packet);
  //console.log(frname);

  enum week {
    day1 = "Sunday",
    day2 = "Monday",
    day3 = "Tuesday",
    day4 = "Wednesday",
  }
  //console.log(week.day4);
  interface Ifunc {
    (name: string, val: number): void;
  }
  const foo1: Ifunc = (a, b) => {
    return a + " " + b;
  };
  //console.log(foo1("Harshit", 7));

  let a1: string | number | null;
  a1 = null;

  interface food {
    dish: string;
    price: number;
  }

  // interface food {
  //   taste: string;
  // }

  interface tfood extends food {
    taste: string;
  }
  const obj1: tfood = {
    dish: "Sahi Paneer",
    price: 145,
    taste: "Good",
  };
  // console.log(obj1);

  function foo2(name: string): string {
    return name;
  }
  foo2("1254");

  class pendrive {
    //private name: string;
    protected name: string;
    constructor(comp: string) {
      this.name = comp;
    }
    getval() {
      console.log(this.name);
    }
  }

  class portal extends pendrive {
    private names: string;
    constructor(comp: string, na: string) {
      super(comp);
      this.names = na;
    }
    geter() {
      console.log(this.names, this.name);
    }
  }

  const com1 = new pendrive("HP");
  const com2 = new pendrive("WDD");
  const com3 = new portal("hp", "pl");
  //console.log(com1, com2);

  return <div>Only for Type Script console</div>;
}

export default TypePage;
