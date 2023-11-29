import React, { useState } from 'react';
import AddCar from './components/AddCar';
import CarList from './components/CarList';


const App = () => {
  const [carList, setCarList] = useState([]);


  const addCarToList = (newCar) => {
    const existingCarIndex = carList.findIndex(
      (car) => car.name === newCar.name && car.model === newCar.model
    );


    if (existingCarIndex !== -1) {
 
      
      const updatedCarList = [...carList];
      updatedCarList[existingCarIndex].quantity += newCar.quantity;
      setCarList(updatedCarList);
    } else {


      setCarList([...carList, newCar]);
    }
  };


  return (
    <div>
      <AddCar addCarToList={addCarToList} />
      <CarList cars={carList} />
    </div>
  );
};


export default App;
