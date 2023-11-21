import "./App.css";
// import  Form  from './components/Form';
// import { ToggleComponent } from './components/ToggleComponent';
// import { SearchFilterComponent } from './components/SearchFilterComponent';
// import { ApiCallComponent } from './components/ApiCallComponent';
import { useState, useEffect } from "react";
import Preloader from "./components/PreLoder";
import { AnimatedStars } from "./components/AnimatedStars";
import { DownArrow } from "./components/DownArrow";
import HireMe from "./components/HireMe";
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate an API call or other asynchronous task
    const fetchData = async () => {
      // Perform your data fetching logic here
      // For example: const data = await fetchDataFromAPI();

      // Simulate a delay of 3 seconds (adjust as needed)
      setTimeout(() => {
        // Once the timeout is complete, set loading to false
        setLoading(false);
      }, 3000);
    };

    // Call the fetchData function
    fetchData();
  }, []); //
  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "30px",
          }}
        >
          <AnimatedStars />
          <DownArrow />
          <HireMe />
        </div>
      )}
      {/* <ToggleComponent /> */}
      {/* <SearchFilterComponent /> */}
      {/* <ApiCallComponent /> */}
      {/* <Form /> */}
    </>
  );
}

export default App;
