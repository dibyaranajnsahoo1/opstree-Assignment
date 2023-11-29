import React, { useState } from 'react';

const AddCar = ({ addCarToList }) => {
  const [name, setName] = useState('');
  const [model, setModel] = useState('');
  const [quantity, setQuantity] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    addCarToList({ name, model, quantity });
    setName('');
    setModel('');
    setQuantity(0);
  };

  return (
    <div>
      <h2>Add Car</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          required
        />
        
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
          required
        />
        <button type="submit">Add Car</button>
      </form>
    </div>
  );
};

export default AddCar;

