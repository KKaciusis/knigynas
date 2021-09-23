import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Book from './Book';

function App() {

    const [books, setBooks] = useState([]);

    useEffect(()=> {
        console.log('start');

        axios
            .get('https://in3.dev/knygos/')
            .then(function (response) {
                setBooks(response.data);
                console.log(response.data)
            })
    }, []);

    const buy = (id) => {
        const booksCopy = books.slice();
        for (let i = 0; i < booksCopy.length; i++) {
            if (id === booksCopy[i].id) {
                booksCopy.splice(i, 1);
                break;
            }
        }
        setBooks(booksCopy);
    }

    return (<div className="todo-container">
        {books.map((book)=>(<Book key={book.id} type={book.type} img={book.img} buy={buy} id={book.id}  data={book}></Book>))}
    </div>)
}
export default App;