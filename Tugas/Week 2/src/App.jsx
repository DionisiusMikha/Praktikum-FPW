import React, { useState } from 'react';
import './App.css';
import KotakKiri from './component/KotakKiri';
import KotakKanan from './component/KotakKanan';

function App() {
  const [Workouts, setWorkouts] = useState([
    {
      title: 'senam 1 jari',
      kesulitan: 'beginner',
      waktu: '10 - 15',
      gender: 'male',
    },
    {
      title: 'senam 2 jari',
      kesulitan: 'intermediate',
      waktu: '11 - 20',
      gender: 'female',
    },
    {
      title: 'senam 3 jari',
      kesulitan: 'hard',
      waktu: '11 - 20',
      gender: 'intersex',
    },
  ]);

  const [selectedWorkout, setSelectedWorkout] = useState(null);

  const handleWorkoutSelection = (workout) => {
    setSelectedWorkout(workout);
  };

  return (
    <div className="home">
      <div className="div">
        <KotakKiri onWorkoutSelect={handleWorkoutSelection} Workouts={Workouts} />
        <KotakKanan selectedWorkout={selectedWorkout} workouts={Workouts} />
        <div className="text-wrapper-2">GETFIT</div>
      </div>
    </div>
  );
}

export default App;
