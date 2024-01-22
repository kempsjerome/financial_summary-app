import React from "react";
import style from "./style.module.scss";

export const Amount = ({ listElement }) => {
  const totalAmount = listElement.reduce((prevValue, currentValue) => {
    const newNumber = parseInt(currentValue.number);

    if (currentValue.category === "entry") {
      return prevValue + newNumber;
    }

    if (currentValue.category === "expense") {
      // Subtract the expenditure from the accumulated value
      return prevValue - newNumber;
    }

    // If the category is neither "entry" nor "expend," return the accumulated value unchanged
    return prevValue;
  }, 0);

  const dollar = totalAmount.toLocaleString("en-US", { style: "currency", currency: "USD" });

  return (
    <>
      <div className={style.AmountBox}>
        <div className="container">
          <h3 className="title three">Amount:</h3>
        <p className={`paragraph disable ${style.text}`}>The value refers to the balance</p>
        </div>

          <span className="paragraph ">{dollar}</span>
      </div>
    </>
  );
};

