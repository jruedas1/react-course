import { useState } from "react";
import BookEdit from "./BookEdit";
import useBooksContext from "../hooks/useBooksContext";

function BookShow({ book }){
    const [showEdit, setShowEdit] = useState(false);
    const { deleteBookById } = useBooksContext();

    const handleDeleteClick = () => deleteBookById(book.id);
    const handleEditClick = () => setShowEdit(!showEdit);

    const handleEditSubmit = ()=> {
        setShowEdit(false);
    }

    let content = <h3>{book.title}</h3>
    if (showEdit) content = <BookEdit book={book} onEditSubmit={handleEditSubmit}/>

    return (
        <div className='book-show'>
            <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="books"/>
            <div>{content}</div>
            <div className='actions'>
                <button className='edit' onClick={handleEditClick}>
                    Edit
                </button>
                <button className='delete' onClick={handleDeleteClick}>
                    Delete
                </button>
            </div>
        </div>
    );
}

export default BookShow;