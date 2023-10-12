import React from "react";

function CardItem(props) {
    const isDomestik = props.data.jenis === "domestik";
    return(
        <>
            <div className="div-wrapper">
                <div className="frame-3">
                <div className="asal-alias-tujuan">{props.data.asal.alias} - {props.data.tujuan.alias}</div>
                <div className="jadwal-berangkat">{props.data.jadwal.berangkat.tanggal}</div>
                <div className="depart-on-berangkat">Depart On {props.data.jadwal.berangkat.jam}</div>
                <div className="pesawat-maskapai">{props.data.pesawat.maskapai} - {props.data.pesawat.model}</div>
                {isDomestik ? (
                    <div className="overlap-group1">
                    <div className="jenis1">{props.data.jenis}</div>
                    </div>
                    ) : (
                    <div className="overlap-group">
                    <div className="jenis">{props.data.jenis}</div>
                    </div>
                )}
                </div>
            </div>
        </>
    )
}

export default CardItem