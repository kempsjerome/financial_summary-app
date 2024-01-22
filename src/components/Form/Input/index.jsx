import React from 'react';


export const Input  = ({id,label,type,placeholder,value , setValue}) =>{
     


    return (
        <div >
            <label htmlFor={id} className="label">{label}</label>
            <input type={type} id ={id} name={id}
            placeholder={placeholder} value={value}
            onChange={(e) => setValue(e.target.value)}/>


        </div>
    )
};