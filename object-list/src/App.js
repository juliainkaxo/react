
import './App.css';
import Item from './Item';
import { v4 as uuid } from 'uuid';
import {useState, useEffect} from 'react';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const shoppingList = Array();
    shoppingList.push(new Item('Coffee', 1));
    shoppingList.push(new Item('Cookies', 5))
    shoppingList.push(new Item('Milk', 2))
    setItems(shoppingList);
}, []);

  return (
    <div style={{margin: '30px'}}>
      <h3>Shopping List</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={uuid}>
              <td>{item.name}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
