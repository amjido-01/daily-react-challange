// Preloader.js
import { useState, useEffect } from "react";

const Preloader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fn = async () => {
            setTimeout(() => {
                setLoading(false)
            }, 2000)
        }
        fn()
    }, [])

  return (
    <div className={`preloader ${loading ? "loading" : ""}`}>
      <div className="door white-door"></div>

      <h1 className="welcome" style={{ color: "#0b1121", fontSize: "8em" }}>
        load
        <span style={{ color: "white" }}>ing...</span>
      </h1>

      <div className="door red-door"></div>
    </div>
  );
};

export default Preloader;
 