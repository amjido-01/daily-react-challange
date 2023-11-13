import { useState } from "react";
const Data = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Orange" },
  { id: 4, name: "Grapes" },
  { id: 5, name: "Mango" },
  { id: 6, name: "Pineapple" },
  { id: 7, name: "Strawberry" },
  { id: 8, name: "Watermelon" },
  { id: 9, name: "Kiwi" },
  { id: 10, name: "Peach" },
];

export const SearchFilterComponent = () => {
    const [items, setItems] = useState(Data);
    const [filter, setFilter] = useState("");

    const handleFilter = (e) => {
        const inputVal = e.target.value;
        setFilter(inputVal);

        const filterVal = Data.filter((item) => {
            return item.name.toLowerCase().includes(inputVal.toLowerCase());
        })
        setItems(filterVal)
    }
    return (
        <>
        <input type="text" value={filter} onChange={handleFilter} />
        {items.map((item) => {
            return <li key={item.id}>{item.name}</li>
        })}
        </>
    )
}