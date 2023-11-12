import { useState } from 'react'
import './App.css'

function App() {
const initialItems = [
  { id: 1, name: "orange" },
  { id: 2, name: "mango" },
  { id: 3, name: "tree" },
];

const [items, setItems] = useState(initialItems);
const [filter, setFilter] = useState("");

const handleSearch = (e) => {
 const inputVal = e.target.value;
 setFilter(inputVal);

 const filterVals = initialItems.filter((item) => 
 item.name.toLowerCase().includes(inputVal.toLowerCase())
 )
 setItems(filterVals)
}


  return (
    <>
      <p>hello search</p>
      <input type="text" value={filter} onChange={handleSearch}/>
      <ul>
       {items.map((item) => {
        return <li key={item.id}>{item.name}</li>
       })}
      </ul>
    </>
  );
}

export default App
