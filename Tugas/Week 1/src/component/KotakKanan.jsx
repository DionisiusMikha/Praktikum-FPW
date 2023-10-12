import React from "react";
import DetailKanan from './DetailKanan';

function KotakKanan(props) {
  const randomIndex = Math.floor(Math.random() * props.data.length);
  const randomData = props.data[randomIndex];

  return (
    <div className="kanan">
      <DetailKanan data={randomData} />
    </div>
  );
}

export default KotakKanan;
