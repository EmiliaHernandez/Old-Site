import React, { useState } from 'react';
import './App.css';
import DurationExercise from './components/DurationExercise';
import RepetitionExercise from './components/RepetitionExercise';

function App() {
  const [showDurationExercise, setShowDurationExercise] = useState(false);
  const [showRepetitionExercise, setShowRepetitionExercise] = useState(false);

  const handleStartRepetitionExercise = () => {
    setShowDurationExercise(false);
    setShowRepetitionExercise(true);
  };

  const handleStartDurationExercise = () => {
    setShowRepetitionExercise(false);
    setShowDurationExercise(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        {!showRepetitionExercise && !showDurationExercise && (
          <div>
            <button onClick={handleStartRepetitionExercise}>Pushups</button>
            <button onClick={handleStartDurationExercise}>Running</button>
          </div>
        )}
        {showRepetitionExercise && <RepetitionExercise onReturn={() => setShowRepetitionExercise(false)} />}
        {showDurationExercise && <DurationExercise onReturn={() => setShowDurationExercise(false)} />}
      </header>
    </div>
  );
}

export default App;
