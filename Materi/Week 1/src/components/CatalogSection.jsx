import ItemCard from "./ItemCard";

function CatalogSection(props) {
    return (
        <div className="my-3">
            <div className="row">
                {
                    props.product.map((products) => {
                        return <ItemCard products={products} key={products.name} />
                    })
                }
            </div>
        </div>
    )
}

export default CatalogSection;