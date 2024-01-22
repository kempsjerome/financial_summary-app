// /src/components/Form/Select/Select.jsx

import React from 'react';

 const Select = ({ label, id, setValue }) => {
  const handleSelectChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <label htmlFor={id}>{label}:</label>
      <select id={id} onChange={handleSelectChange}>
        <option value="entry">Enty</option>
        <option value="expense">Expenses</option>
      </select>
    </div>
  );
};

export default Select;
