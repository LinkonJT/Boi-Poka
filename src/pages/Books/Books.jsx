import React, { Suspense, useEffect, useState } from 'react';
import Book from '../Book/Book';






const Books = ({data}) => {

    const [allBooks, setAllBooks] = useState([]);
//fetch method1:
// useEffect(()=>{}, []);
// useEffect(()=>{
//     fetch("booksData.json")
//     .the (res=> res.json() )
//     .then(data=>{
//         // console.log(data)
//         setAllBooks(data);
//     })
// }, []);


// fetch method: 2
// const bookPromise= fetch('./booksData.json').then (res=>res.json())

//fetch method 3: the loader mthod used in the Routes folder

    return (
        <div>
            <h1 className='text-3xl text-center'>books</h1>
            <Suspense fallback={<span>loading....</span>}>
<div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5'>
{
    data.map((singleBook)=><Book key={singleBook.bookId} singleBook={singleBook}></Book>)
}
</div>
            </Suspense>
        </div>
    );
};

export default Books;