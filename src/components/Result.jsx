import React from "react";
import Style from "../style";

const Result = ({ msg }) => {
  return (
    <div className={`${Style.message}`}>
      <p className=" text-green-600 font-bold">Success!</p>
      <p className="font-bold">Result : {msg}</p>
    </div>
  );
};

export default Result;
