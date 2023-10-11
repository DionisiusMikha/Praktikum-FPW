import React from "react";

function CardItem() {
    return(
        <>
            <div className="div-wrapper">
                <div className="frame-3">
                    <div className="asal-alias-tujuan">&lt;asal.alias-tuju1an.alias&gt;</div>
                    <div className="jadwal-berangkat">&lt;jadwal.berangkat.tanggal&gt;</div>
                    <div className="depart-on-berangkat">&lt;Depart on berangkat.jam&gt;</div>
                    <div className="pesawat-maskapai">&lt;pesawat.maskapai - pesawat.model&gt;</div>
                    <div className="overlap-group">
                        <div className="jenis">&lt;jenis&gt;</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardItem