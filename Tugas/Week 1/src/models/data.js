/**
 * Sebuah class Data yang menyimpan data tentang barang yang akan dijual.
 */
class Data {
    /**
     * Membuat sebuah instansi barang yang baru.
     * 
     * @param {Number} asal asal dari barang.
     * @param {String} tujuan Nama dari barang.
     * @param {Number} pesawat Harga dari barang.
     * @param {Number} jadwal Jumlah barang yang tersedia.
     */
    constructor(asal, tujuan, pesawat, jadwal, jenis) {
        this._asal = asal;
        this._tujuan = tujuan;
        this._pesawat = pesawat;
        this._jadwal = jadwal;
        this._jenis = jenis;
    }

    get asal() { return this._asal; }
    set asal(value) { this._asal = value; }

    get tujuan() { return this._tujuan; }
    set tujuan(value) { this._tujuan = value; }

    get pesawat() { return this._pesawat; }
    set pesawat(value) { this._pesawat = value; }

    get jadwal() { return this._jadwal; }
    set jadwal(value) { this._jadwal = value; }

    get jenis() { return this._jenis; }
    set jenis(value) { this._jenis = value; }
}

export default Data;