import React from 'react';
import CardItem from './CardItem';

const KotakKiri = ({ onWorkoutSelect }) => {
  const Workouts = [
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
  ]
  

  return (
    <div className="kiri">
      <div className="overlap" style={{ cursor: 'pointer' }}>
        <div className="text-wrapper">+ Add new plan</div>
      </div>
      <div className="listworkout">
        <div className="frame">
          {Workouts.map((Workout, index) => {
            return (
              <div
                key={index}
                onClick={() => onWorkoutSelect(index)}
                style={{ cursor: 'pointer' }}
              >
                <CardItem Workout={Workout} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default KotakKiri;
