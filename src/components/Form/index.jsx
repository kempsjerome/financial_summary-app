import React, { useState } from 'react';
import { Input } from '../Form/Input';  // Utilisation du chemin relatif correct
import Select from './Select';
import style from "./style.module.scss";
import { Amount } from '../Amount';

export const Form = ({ listElement, addElement }) => {
    const [description, setDescription] = useState("");
    const [number, setNumber] = useState("");
    const [category, setCategory] = useState("entry");

    function handleSubmit(e) {
        e.preventDefault();
        if (description !== "" && number !== "") {
            addElement(description, number, category);
            setDescription("");
            setNumber("");  // Réinitialiser la valeur de number après ajout de l'élément
        }
    }
    

    return (
        <section className={style.section}>
            <form className={style.formBox} onSubmit={handleSubmit}>
                <Input
                    label="Description"
                    type="text"
                    id="description"
                    placeholder="Enter The Description"
                    value={description}
                    setValue={setDescription}
                />
                <p className={style.disable}>EX : Buying clothes</p>

                <Input
                    label="Value ($)"
                    type="number"
                    id="number"
                    placeholder="Enter the number"
                    value={number}
                    setValue={setNumber}
                />
                <Select
                    label="Value type"
                    id="select"
                    setValue={setCategory}
                />
                <button type="submit" className='btn larger full'>Enter the value</button>
            </form>

            <div>
        <Amount listElement={listElement} addElement={addElement} />  
            </div>
        </section>
    );
};
