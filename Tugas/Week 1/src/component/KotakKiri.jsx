import CardItem from "./CardItem"

function KotakKiri(props) {
    // console.log(props.data)
    return(
        <>
        <div className="kiri">
            <div className="frame">
                <div className="frame-2">
                    {
                        props.data.map((data) => {
                            return <CardItem data={data}  />
                        })
                    }
                </div>
            </div>
            <div className="text-wrapper">List Penerbangan</div>
        </div>
        </>
    )
}

export default KotakKiri