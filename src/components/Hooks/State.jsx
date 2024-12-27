import { useState } from "react";

export const State = () => {
    const [count,setCount]= useState(0);
   const handleButtonClick = () => {
    setCount(() => count+1);
   }
   
    return (
        <>
        <h2>{count}</h2>
        <button onClick={handleButtonClick}>Increment</button>
        </>
    )
}