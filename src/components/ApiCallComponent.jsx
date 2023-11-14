import { useState, useEffect } from "react";
// https://jsonplaceholder.typicode.com/users

export const ApiCallComponent = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch(
                  "https://jsonplaceholder.typicode.com/users");

                  if (!res.ok) {
                    console.log("holly smokes");
                  }

                  const result = await res.json()
                  setData(result)
            } catch(error) {
                console.log(error);
            }
        }
        getData()
    }, [])
  return <div>
    {data ? (<ul>
        {data.map((user) => {
            return <li key={user.id}>{user.name}</li>
        })}
    </ul>) : "loading"}
  </div>;
};
