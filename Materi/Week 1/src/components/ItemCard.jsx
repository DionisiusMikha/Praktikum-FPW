function ItemCard(props) {
    return (
        <div className="col-4">
            <div className="card shadow my-3">
                <img src={props.products.image} alt="React Logo" className="card-img-top p-2" />
                <div className="card-body">
                    <h2 className="card-title">{props.products.name}</h2>
                    <h4 className="card-text">{props.products.description}</h4>
                </div>
            </div>
        </div>
    );
}

export default ItemCard;