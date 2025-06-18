import {createContext, useState} from 'react';
import axios from "axios";

const BooksContext = createContext();

function Provider({ children }){
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const resp = await axios.get('http://localhost:3001/books');
        setBooks(resp.data);
    }

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

    const valueToShare = { books, deleteBookById, editBookById, handleCreateBook, fetchBooks }

    return <BooksContext.Provider value={valueToShare}>
        { children }
    </BooksContext.Provider>
}

export { Provider }
export default BooksContext;