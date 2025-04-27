import React, { useEffect, useState } from 'react';





const Books = () => {

    const [allBooks, setAllBooks] = useState([]);

// useEffect(()=>{}, []);
useEffect(()=>{
    fetch("booksData.json")
    .the (res=> res.json() )
    .then(data=>{
        // console.log(data)
        setAllBooks(data);
    })
}, []);

    return (
        <div>
            <h1>hello books</h1>
        </div>
    );
};

export default Books;