import React from "react";
import ListCard from "./ListCard";
import style from "./style.module.scss"

export const List = ({ listElement, removeElement }) => {
  return (
    <div className={style.listStyle}>
      <h2 className="title two">Financial summary</h2>
      {listElement && listElement.length > 0 ? (
        <ul>
          {listElement.map((element) => {
            const { description, number, category, id } = element;
            const newNumber = parseInt(number);
            const convertToDollars = newNumber.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            });

            return (
              <ListCard
                key={id}
                title={description}
                choose={category}
                id={id}
                balance={convertToDollars}
                removeElement={removeElement}
              />
            );
          })}
        </ul>
      ) : (
        <p>You don't have any realeases yet</p>
      )}
    </div>
  );
};
