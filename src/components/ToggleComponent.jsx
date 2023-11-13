import { useState } from 'react';

export const ToggleComponent = () => {
    const [toggler, setToggler] = useState(null);

    const handleOpen = () => {
        setToggler(true)
    }

    const handleClose = () => {
        setToggler(false)
    }

    return (
      <>
        {toggler && (
          <div
            style={{
              width: "300px",
              height: "300px",
              border: "1px solid blue",
            }}
          >
            <p style={{ textAlign: "center", fontSize: "40px" }}>
              hello from here
            </p>
          </div>
        )}
        <div style={{ display: "flex", gap: "10px" }}>
          <button onClick={handleOpen}>open</button>
          <button onClick={handleClose}>close</button>
        </div>
      </>
    );
}
