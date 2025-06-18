import BookShow from "./BookShow.js";
import useBooksContext from "../hooks/useBooksContext";

function BookList(){
    const { books } = useBooksContext();


    const renderedBooks = books.map( book => (
            <BookShow
                key={book.id}
                book={book}
            />
    ));

    return <div className='book-list'>
        {renderedBooks}
    </div>
}

export default BookList;