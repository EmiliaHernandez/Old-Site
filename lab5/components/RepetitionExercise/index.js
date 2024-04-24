import React, { useState } from 'react';

function RepetitionExercise({ onReturn }) {
  const [count, setCount] = useState(0);

  const repCounter = () => {
    setCount(count + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  // Function to format count with leading zeros
  const formatCount = (count) => {
    return count.toString().padStart(2, '0');
  };

  return (
    <div className="repetitionExercise">
      <h1>Pushups</h1>
      {/* Display count with leading zeros */}
      <p>Rep: {formatCount(count)}</p>
      <button onClick={repCounter}>Increment</button>
      <button onClick={resetCount}>Reset</button>
      <button onClick={onReturn}>Return</button>
    </div>
  );
}

export default RepetitionExercise;
