const BookCard = (props) => {
    return(
        <div className="card rounded bg-blue-100 p-10 w-auto m-2">
            <div className="text-lg font-semibold">{props.book.title}</div>
            <div className="mt-3">{props.book.author}</div>
        </div>
    )
}

export default BookCard