import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoredDB } from "../../Unility/addToDB";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);

  const data = useLoaderData();

  const singleBook = data.find((book) => book.bookId === bookId);
  console.log(singleBook);
  // console.log(typeof id, data)
  const { bookName, image } = singleBook || {};

  const handleMarkAsRead= (id)=>{
    //store with id
    //where to store (for now store in the locals storage)
    //how will it be kept? (in array or collection)
    //If boook already exists show an alert
    //if book doesnt exist then push in the collection or array


    addToStoredDB(id)
  }

  return (
    <div className="w-2/3 mx-auto">
      <img src={image} alt="" />
      <h5>{bookName}</h5>

      <button onClick={()=>handleMarkAsRead(id)} className="btn btn-active btn-accent m-2">Mark as Read</button>
      <button className="btn btn-active btn-info m-2">Add To WishList</button>
    </div>
  );
};
 
export default BookDetails;
