import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Songs",
  "Gaming",
  "Live",
  "Soccer",
  "Cricket",
  "Cooking",
  "Valentines",
];
const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((buttonName) => (
        <Button name={buttonName} />
      ))}
    </div>
  );
};

export default ButtonList;
