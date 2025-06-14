import { useState, useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList.js";
import axios from "axios";

function App(){
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const resp = await axios.get('http://localhost:3001/books');
        setBooks(resp.data);
    }

    useEffect(()=>{fetchBooks();}, []);

    const deleteBookById = async id => {
        await axios.delete(`http://localhost:3001/books/${id}`);
        const updatedBooks = books.filter(book => book.id !== id);
        setBooks(updatedBooks);
    }

    const editBookById = async (id, newTitle) => {
        const resp = await axios.put(`http://localhost:3001/books/${id}`, {title: newTitle});
        const updatedBooks = books.map(book => book.id===id ? {...book, ...resp.data} : book);
        setBooks(updatedBooks);
    }

    const handleCreateBook = async (title) => {
        const resp = await axios.post('http://localhost:3001/books', {title});
        const updatedBooks = [...books, resp.data];
        setBooks(updatedBooks);
    }

    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList books={books} onDelete={deleteBookById} onEdit={editBookById}/>
            <BookCreate onCreateBook={handleCreateBook} />
        </div>
    );
}

export default App;