import React from "react";
import Style from "../style";

const Error = ({ msg }) => {
  return (
    <div className={`${Style.message}`}>
      <p className="text-errorMsg font-bold">Error!</p>
      <p className=" font-bold">{msg}</p>
    </div>
  );
};

export default Error;
