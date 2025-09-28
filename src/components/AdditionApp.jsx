import React, { useState } from "react";

export default function AdditionApp() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const handleAddition = () => {
    // Convert to numbers before adding
    setResult(Number(num1) + Number(num2));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Addition in React</h2>

      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <br /><br />

      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <br /><br />

      <button onClick={handleAddition}>Add</button>

      {result !== null && (
        <h3>Result: {result}</h3>
      )}


      --- test -- {num1}
    </div>
  );
}
