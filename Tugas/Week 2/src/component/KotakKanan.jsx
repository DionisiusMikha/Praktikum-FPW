import React from 'react';

const KotakKanan = ({ selectedWorkout, workouts }) => {
  const selectedWorkoutDetails = selectedWorkout !== null && selectedWorkout < workouts.length
    ? workouts[selectedWorkout]
    : null;

  return (
    <div className="kanan-kosong">
      {selectedWorkoutDetails ? (
        <div style={{color:'black'}}>
          <h1>edit</h1>
          <h3>{selectedWorkoutDetails.title}</h3>
          <p>Kesulitan: {selectedWorkoutDetails.kesulitan}</p>
          <p>Waktu: {selectedWorkoutDetails.waktu} Menit</p>
          <p>Gender: {selectedWorkoutDetails.gender}</p>
        </div>
      ) : (
        <p className="p">Choose a plan to see details</p>
      )}
    </div>
  );
};

export default KotakKanan;
