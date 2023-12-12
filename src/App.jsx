import "./App.css";
import { useState, useEffect } from "react";
import Preloader from "./components/PreLoder";
import { AnimatedStars } from "./components/AnimatedStars";
// import { DownArrow } from "./components/DownArrow";
// import Example from "./components/Example";
import { Landing } from "./components/Landing";
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {

      setTimeout(() => {
        setLoading(false);
        console.log("app.js");
      }, 2000);
    };

    // Call the fetchData function
    fetchData();
  }, []); //

  return (
    <div>
      {loading ? (
        <Preloader />
      ) : (
        <div className=" min-h-screen">
         <Landing />
        </div>
      )}
    </div>
  );
}

export default App;
