//Project-changing the color according to the Temperature value



import React, { useState } from "react";
import "..//../src/component/TemperatureControl.css";

export default function TemperatureControl() {
    const isBackgroundBlue = 0<14;
   //const isBackgroundRed=15>60;
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("");
 
  const incrementClick = () => {
    
    setCount(count + 1);
    if (count>=14 ) {
setColor( <div className={isBackgroundBlue ? 'background-red' : 'background-blue'} 
    
/>);
    }
  };
  const decrementClick = () => {
    setCount(count - 1);
    if (count<=14 ) {
        setColor( <div className={isBackgroundBlue ? 'background-blue' : 'background-red'} />);
            }
  }


  return (
    <>
      <h1>TemperatureControl</h1>

      <div className="container">
        <div className="Count">
          <center>
            {count}
            {color}
          </center>
        </div>
        <br />
        <button
          className="btn btn-primary"
          onClick={incrementClick}
          onChange={(e) => setCount(e.target.value)}
        >
          +
        </button>
        <br />
        <br />
        <button
          className="btn btn-primary"
          onClick={decrementClick}
          onChange={(e) => setCount(e.target.value)}
        >
          -
        </button>
        <p>The Weather Temperature -  {count<16?  "cool":  "hot"} {count}deg celsus </p>
      </div>
    </>
  );
}
