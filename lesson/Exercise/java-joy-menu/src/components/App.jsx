import React, { useState } from 'react';
import Coffees from '../components/Coffees.jsx';
import Teas from '../components/Teas.jsx';
import Pastries from '../components/Pastries.jsx';
import styles from '../MenuStyles.module.css';

function App() {

  const [showCoffees, setshowCoffees] = useState(true);

  const coffees = [
    { name: 'Espresso', price: '$2.00'},
    { name: 'Cappuccino', price: '$3.00'},
    { name: 'Latte', price: '$4.00'},
    { name: 'Macchiato', price: '$3.50'},
    { name: 'Mocha', price: '$4.50'}
  ];

  const teas = [
    { name: 'Green Tea', price: '$2.50'},
    { name: 'Black Tea', price: '$2.50'},
    { name: 'Chai Tea', price: '$3.00'},
  ];

  const pastries = [
    { name: 'Croissant', price: '$3.00'},
    { name: 'Bagel', price: '$2.50'},
    { name: 'Muffin', price: '$2.00'},
  ];
  
  return (
    <div>
      <h1>Java Joy Menu</h1>
      <button onClick={() => setshowCoffees(!showCoffees)}>Display Coffees</button>
      {showCoffees && <Coffees coffeesList={coffees}/>}
    </div>
  );
}

export default App

