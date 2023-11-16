import { useState, useEffect } from "react";
// https://jsonplaceholder.typicode.com/users
export const ApiCallComponent = () => {
  const [data, setData] = useState([]);
  const [initialData, setInitialData] = useState([])
  const [filter, setFilter] = useState("");
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!res.ok) {
          throw new Error("something bad")
        }

        const result = await res.json()
        setData(result)
        setInitialData(result)
        console.log(initialData);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    getData()
  }, [])


  const handleSearch = (e) => {
    const inputVal = e.target.value;
    setFilter(inputVal);
    console.log(filter);

    const filteredVal =  initialData.filter((item) => {
      return item.name.toLowerCase().includes(inputVal.toLowerCase())
    })
    setData(filteredVal)
  }

  return (
    <div>
      <input type="text" value={filter} onChange={handleSearch} placeholder="search..."/>
      {data ? (<ul>
        {data.map((user) => {
          return <li key={user.id}>{user.name}</li>
        })}
      </ul>) : "loading..."}
    </div>
  )
}
