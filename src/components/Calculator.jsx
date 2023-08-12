import React, { useState } from "react";
import Style from "../style";
import Error from "./Error";
import Result from "./Result";

const Calculator = () => {
  //store the Input value from the user
  const [value, setValue] = useState({
    numOne: "",
    numTwo: "",
  });

  //store the error if any occur during validation
  const [error, setError] = useState({
    numOneErr: false,
    numOneMsg: "",
    numTwoErr: false,
    numTwoMsg: "",
    numErr: false,
    numErrMag: "",
  });

  //store the result of the calculated value
  const [result, setResult] = useState(null);

  //To Check if the Entered value is Empty or value is number or not and Type of number Entered
  function operation(operant) {
    if (value.numOne === "") {
      return setError({
        ...error,
        numOneErr: true,
        numOneMsg: "Num1 Cannot Be Empty",
        numTwoErr: false,
        numTwoMsg: "",
        numErr: false,
        numErrMag: "",
      });
    } else if (value.numTwo === "") {
      return setError({
        ...error,
        numOneErr: false,
        numOneMsg: "",
        numTwoErr: true,
        numTwoMsg: "Num2 Cannot Be Empty",
        numErr: false,
        numErrMag: "",
      });
    }

    let num1 = 0;
    let num2 = 0;

    if (!isNaN(value.numOne) && !isNaN(value.numTwo)) {
      num1 = parseFloat(value.numOne);
      num2 = parseFloat(value.numTwo);

      if (num1 % 1 === 0) {
        if (num1 >= 0) {
          console.log("Num 1 is Positive Integer");
        } else {
          console.log("Num 1 is Negative Integer");
        }
      } else {
        if (num1 >= 0) {
          console.log("Num 1 is Positive Floating Point");
        } else {
          console.log("Num 1 is Negative Floating Point");
        }
      }

      if (num2 % 1 === 0) {
        if (num2 >= 0) {
          console.log("Num 2 is Positive Integer");
        } else {
          console.log("Num 2 is Negative Integer");
        }
      } else {
        if (num2 >= 0) {
          console.log("Num 2 is Positive Floating Point");
        } else {
          console.log("Num 2 is Negative Floating Point");
        }
      }

      setError({
        ...error,
        numOneErr: false,
        numOneMsg: "",
        numTwoErr: false,
        numTwoMsg: "",
        numErr: false,
        numErrMag: "",
      });
    } else {
      return setError({
        ...error,
        numOneErr: false,
        numOneMsg: "",
        numTwoErr: false,
        numTwoMsg: "",
        numErr: true,
        numErrMag: "Please Entry The Number",
      });
    }

    calculate(operant, num1, num2);
  }

  //Calculation operation
  function calculate(operant, num1, num2) {
    switch (operant) {
      case "+":
        setResult(() => num1 + num2);
        setValue({
          ...value,
          numOne: "",
          numTwo: "",
        });
        break;
      case "-":
        setResult(() => num1 - num2);
        setValue({
          ...value,
          numOne: "",
          numTwo: "",
        });
        break;
      case "*":
        setResult(() => num1 * num2);
        setValue({
          ...value,
          numOne: "",
          numTwo: "",
        });
        break;
      case "/":
        setResult(() => num1 / num2);
        setValue({
          ...value,
          numOne: "",
          numTwo: "",
        });
        break;
      default:
        return setResult(() => null);
    }
  }

  return (
    <div className={`${Style.mainDiv}`}>
      <h1 className="font-bold text-[1.6rem]">React Calculator</h1>
      <input
        type="text"
        placeholder="Enter 1st number"
        value={value.numOne}
        className={`${Style.input} my-5`}
        onChange={(e) => setValue({ ...value, numOne: e.target.value })}
      />
      <input
        type="text"
        placeholder="Enter 2nd number"
        value={value.numTwo}
        className={`${Style.input} mb-5`}
        onChange={(e) => setValue({ ...value, numTwo: e.target.value })}
      />
      <div className="flex items-center justify-evenly w-full">
        <button className={`${Style.button}`} onClick={() => operation("+")}>
          +
        </button>
        <button className={`${Style.button}`} onClick={() => operation("-")}>
          -
        </button>
        <button className={`${Style.button}`} onClick={() => operation("*")}>
          *
        </button>
        <button className={`${Style.button}`} onClick={() => operation("/")}>
          /
        </button>
      </div>
      <div className="pt-3 mt-4 -mb-10">
        {error?.numOneErr ? (
          <Error msg={error.numOneMsg} />
        ) : error?.numTwoErr ? (
          <Error msg={error.numTwoMsg} />
        ) : error?.numErr ? (
          <Error msg={error.numErrMag} />
        ) : result ? (
          <Result msg={result} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Calculator;
