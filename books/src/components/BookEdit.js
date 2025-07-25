import { useState } from "react";

function BookEdit({ book, onSubmit }){
    const [title, setTitle] = useState(book.title);

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(book.id, title);
    }

    return <form className="book-edit" onSubmit={handleSubmit}>
        <label htmlFor="newTitle">Title</label>
        <input type="text" id="newTitle" value={title} onChange={handleChange}/>
        <button className="button is-primary">Save</button>
    </form>
}

export default BookEdit;