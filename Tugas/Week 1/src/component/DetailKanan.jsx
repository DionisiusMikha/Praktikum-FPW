import React from "react";
function formatTanggal(tanggal) {
  const dateParts = tanggal.split('-');
  const day = dateParts[0];
  const month = dateParts[1];
  const year = dateParts[2];

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const formattedMonth = months[parseInt(month) - 1];

  return `${day} ${formattedMonth} ${year}`;
}



function DetailKanan(props) {
  const data = props.data;
  const flagbudal= data.asal.flag
  const flagnyampe= data.tujuan.flag
  const budal = `https://flagcdn.com/w80/${flagbudal}.png`
  const nyampe = `https://flagcdn.com/w80/${flagnyampe}.png`
  const tglBerangkat = formatTanggal(props.data.jadwal.berangkat.tanggal);

  return (
    <>
      <div className="overlap">
        <img className="sampai" alt="Sampai" src="sampai.png" />
        <div className="jadwal-berangkat-tgl">{data.jadwal.sampai.tanggal}</div>
        <div className="jadwal-berangkat-jm">{data.jadwal.sampai.jam}</div>
      </div>

      <img className="berangkat" alt="Berangkat" src="berangkat.png" />
      <div className="text-wrapper-2">Departure</div>
      <div className="text-wrapper-3">Arrival</div>
      <div className="text-wrapper-4">Boarding Date</div>
      <div className="text-wrapper-5">Boarding Time</div>
      <div className="text-wrapper-6">Duration</div>
      <div className="text-wrapper-7">Flight Type</div>

      <div className="overlap-2">
        <img className="img" alt="Img" src={budal} />
        <img className="img-2" alt="Img" src={nyampe} />
        <img className="maki-arrow" alt="Maki arrow" src="maki_arrow.svg" />
        <div className="asal-kota">{data.asal.kota}</div>
        <div className="tujuan-kota">{data.tujuan.kota}</div>
        <div className="asal-bandara">{data.asal.bandara}</div>
        <div className="asal-bandara-2">{data.asal.bandara}</div>
      </div>
      <div className="pesawat-maskapai-2">{data.pesawat.maskapai} - {data.pesawat.model}</div>
      <div className="jadwal-berangkat-2">{tglBerangkat}</div>
      <div className="jadwal-berangkat-jam">{data.jadwal.berangkat.jam}</div>
      <div className="durasi">{data.jadwal.durasi}</div>
      <div className="jenis-2">{data.jenis}</div>
      <img className="tanggal" alt="Tanggal" src="tanggal.png" />
      <img className="tanggal-2" alt="Tanggal" src="tanggal.png" />
      <img className="durasi-2" alt="Durasi" src="durasi.png" />
      <img className="durasi-3" alt="Durasi" src="durasi.png" />
      <div className="jadwal-berangkat-tgl-2">{data.jadwal.berangkat.tanggal}</div>
      <div className="jadwal-berangkat-jm-2">{data.jadwal.berangkat.jam}</div>
    </>
  );
}

export default DetailKanan;
