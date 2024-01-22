import React from "react";
import style from "./style.module.scss";

const listCard = ({ title, choose, id, balance, removeElement }) => {
    return (
        <div className={`${style.box} ${choose === "entry" ? style.orange : style.black}`}>
            <div>
                <h3 className="title three">{title}</h3>
                <p className="paragraph">{choose}</p>
            </div>
            <div>
                <p className="paragraph">{balance}</p>
                <button className="btn small" onClick={() => removeElement(id)}>Delete</button>
            </div>
        </div>
    );
}

export default listCard;
