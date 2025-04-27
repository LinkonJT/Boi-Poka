import React from 'react';
import { FaStarHalfAlt } from "react-icons/fa";


const Book = ({singleBook}) => {

    // const data = use(bookPromise)
    // console.log(singleBook)

const {bookName, author, image, rating, category, tags, yearOfPublishing, publisher } = singleBook;

    return (
        <div className="card bg-base-100 w-96 shadow-sm border">
  <figure className='p-4 bg-gray-100 w-2/3 mx-auto'> 
    <img
    className='h-[166px]'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
 <div className='flex justify-center gap-10'>
 {
        tags.map(tag=><button >{tag}</button>)
    }
 </div>
    <h2 className="card-title">
      {bookName}
      <div className="badge badge-secondary">{yearOfPublishing}</div>
    </h2>
    <p className='font-medium'>Book publisher: <span className='text-blue-500 '>{publisher}</span></p>

    <div className='border-t-1 border-dashed'>

    </div>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{category}</div>
      <div className="badge badge-outline">{rating}<FaStarHalfAlt /></div>
    </div>
  </div>
</div>
    );
};

export default Book;