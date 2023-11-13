import { useState } from 'react';
import './App.css';

function App() {
// const initialItems = [
//   { id: 1, name: "orange" },
//   { id: 2, name: "mango" },
//   { id: 3, name: "tree" },
// ];

const [isOpen, setIsOpen] = useState(false);

const handleToggler = () => {
  setIsOpen(true)
}

const handleClosedToggler = () => {
  setIsOpen(false)
}
  return (
    <>
      {isOpen && (
        <div
          style={{ width: "300px", height: "300px", border: "1px solid blue" }}
        >
          <p style={{ textAlign: "center", fontSize: "40px" }}>
            hello from here
          </p>
        </div>
      )}
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={handleToggler}>open</button>
        <button onClick={handleClosedToggler}>close</button>
      </div>
    </>
  );
}

export default App