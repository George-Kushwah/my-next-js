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
  // console.log(packet);
  //console.log(frname);

  return <div></div>;
}

export default TypePage;
