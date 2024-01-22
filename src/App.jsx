import React, { useState } from 'react';
import { HomePage } from './pages/HomePage';
import "./styles/index.scss";
import { v4 as uuidv4 } from 'uuid';  // Importer la fonction uuidv4

const App = () => {
  const [listElement, setListElement] = useState([]);

  const addElement = (description, number, category) => {
    const id = uuidv4();  // Utiliser uuidv4 pour générer un identifiant unique
    const newElement = { description, number, category, id };  // Correction de la variable 'desctiption'
    setListElement([...listElement, newElement]);
  };

  const removeElement = (id) => {
    const elementFilter = listElement.filter((element) => {
      return element.id !== id;
    });
    setListElement(elementFilter);
  };

  return (
    <div>
      <HomePage listElement={listElement} addElement={addElement} removeElement={removeElement} />
    </div>
  );
};

export default App;
