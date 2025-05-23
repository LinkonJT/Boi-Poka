import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'; 
import { getStoredBook } from '../../Unility/addToDB';
import Book from '../Book/Book';


const ReadList = () => {

    //worst case
const [readList, setReadList]= useState([]);
const [sort, setSort]= useState("");


const data = useLoaderData();
console.log(data)

useEffect(()=>{
    const storedBookData = getStoredBook();
    // console.log(storedBookData);
    const ConvertedStoredBooks= storedBookData.map(id=>parseInt(id));
    // console.log(ConvertedStoredBooks);
    const myReadList = data.filter(book=>ConvertedStoredBooks.includes(book.bookId));
    setReadList(myReadList)
},[])


const handleSort=(type) =>{
  setSort(type)

  if(type ==="pages"){
    const sortedByPage=[...readList].sort((a,b)=>(a.totalPages-b.totalPages));
    setReadList(sortedByPage);
    console.log(sortedByPage)
  }
  if(type ==="rating"){
    const sortedByRating=[...readList].sort((a,b)=>(a.rating-b.rating));
    setReadList(sortedByRating);
    console.log(sortedByRating)
  }
}

    return (
        <div>

<div className="dropdown">
  <div tabIndex={0} role="button" className="btn m-1">sort by: {sort? sort:""}</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a onClick={()=>handleSort("pages")}> pages</a></li>
    <li><a onClick={()=>handleSort("rating")}>rating</a></li>
  </ul>
</div>

              <Tabs>
    <TabList>
      <Tab>Read Book List</Tab>
      <Tab>My Wish List</Tab>
    </TabList>

    <TabPanel>
      <h2>Book I read: {readList.length}</h2>
      {
        readList.map(b=><Book key={b.bookId} singleBook={b}></Book>)
      }
    </TabPanel>
    <TabPanel>
      <h2>My Wish List</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ReadList;