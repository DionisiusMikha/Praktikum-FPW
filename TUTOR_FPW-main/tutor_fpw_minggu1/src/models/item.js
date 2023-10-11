/**
 * Sebuah class Item yang menyimpan data tentang barang yang akan dijual.
 */
class Item {
    /**
     * Membuat sebuah instansi barang yang baru.
     * 
     * @param {Number} id Id dari barang.
     * @param {String} name Nama dari barang.
     * @param {Number} price Harga dari barang.
     * @param {Number} stock Jumlah barang yang tersedia.
     */
    constructor(id, name, price, stock) {
        this._id = id;
        this._name = name;
        this._price = price;
        this._stock = stock;
    }

    get id() { return this._id; }
    set id(value) { this._id = value; }

    get name() { return this._name; }
    set name(value) { this._name = value; }

    get price() { return this._price; }
    set price(value) { this._price = value; }

    get stock() { return this._stock; }
    set stock(value) { this._stock = value; }
}

export default Item;