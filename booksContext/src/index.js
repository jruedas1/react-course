import './css/index.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from "./context/books";

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
    <Provider value={10}>
        <App />
    </Provider>
);