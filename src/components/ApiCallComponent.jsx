import { useState, useEffect } from "react";
// https://jsonplaceholder.typicode.com/users
export const ApiCallComponent = () => {
  const [data, setData] = useState([]);
  const [initialData, setInitialData] = useState([]);
  const [filter, setFilter] = useState("");

 useEffect(() => {
  const getData = async() => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!res.ok) {
        throw new Error("something bad happen")
      }

      const result = await res.json()
      setData(result);
      setInitialData(result)
    } catch(error) {
      console.log(error);
    }
  }
  getData()
 }, [])

 const handleFilter = (e) => {
  const inputVal = e.target.value;
  setFilter(inputVal)

  const filterVal = initialData.filter((item) => 
  item.name.toLowerCase().includes(inputVal.toLowerCase())
  )

  setData(filterVal)
 }

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={handleFilter}
        placeholder="search..."
      />
      {data ? (
        <ul>
          {data.map((user) => {
            return <li key={user.id}>{user.name}</li>;
          })}
        </ul>
      ) : (
        "loading..."
      )}
    </div>
  );
}
