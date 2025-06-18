import { useState } from "react";
import useBooksContext from "../hooks/useBooksContext";

function BookCreate(){
    const [title, setTitle] = useState('');
    const { handleCreateBook } = useBooksContext();

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        handleCreateBook(title);
        setTitle('');
    }

    return (
        <div className='book-create'>
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="titleInput">Title</label>
                <input className='input' value={title} onChange={handleChange} title="titleInput"/>
                <button className='button'>Create!</button>
            </form>
        </div>
    )
}

export default BookCreate;