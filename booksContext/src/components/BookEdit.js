import { useState } from "react";

function BookEdit({ book, onEditSubmit }){
    const [title, setTitle] = useState(book.title);

    const handleChange = event => setTitle(event.target.value);

    const handleSubmit = event => {
        event.preventDefault();
        onEditSubmit(book.id, title);
    }

    return (
        <form onSubmit={handleSubmit} className="book-edit">
            <label htmlFor="book-title">Title</label>
            <input className='input' id='book-title' value={title} onChange={handleChange}/>
            <button className='button is-primary'>Save</button>
        </form>
    );
}

export default BookEdit;