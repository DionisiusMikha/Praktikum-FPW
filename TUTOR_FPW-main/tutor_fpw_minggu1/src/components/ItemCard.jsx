import reactLogo from "../assets/react.svg";

/**
 * Komponen ItemCard yang menerima property item dari komponen `CatalogSection`.
 * 
 * Komponen ini bertugas untuk menampilkan informasi barang yang terdapat di aplikasi.
 * 
 * @param {*} props Properties yang diberikan ke komponen.
 * @returns Javascript XML berisi card barang.
 */
function ItemCard(props) {
    return (
        <div className="col-4">
            <div className="card shadow my-3">
                <img src={reactLogo} alt="React Logo" className="card-img-top p-2" />
                <div className="card-body">
                    <h2 className="card-title">{props.item.name}</h2>
                    <h4 className="card-text">Rp. {props.item.price}</h4>
                    <p className="card-text">Stock: {props.item.stock}</p>
                    {props.item.stock<5 && <div className="alert alert-danger">Stock hampir habis!</div>}
                </div>
            </div>
        </div>
    );
}

export default ItemCard;