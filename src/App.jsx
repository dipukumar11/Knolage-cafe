

import { useState } from 'react'
import './App.css'
import Blogs from './Component/Blogs/Blogs'
import BookMark from './Component/BookMark/BookMark'
import Header from './Component/Header/Header'

function App() {
  const [bookMarks, setBookMarks]=useState([])
  const [readingTime, setReadingTime] = useState([])
  

  const handelMarkRead =(reading,id)=>{
  const newReadingTiem = readingTime + reading;
  setReadingTime( newReadingTiem)

  // console.log('remove the book Mark', id)
  const remainingBookMark = bookMarks.filter(bookMark=>bookMark.id !== id)
  setBookMarks(remainingBookMark)
  }

  const handelBookMark =  (blog)=>{
    

   
    const newBookMarks = [...bookMarks, blog]
    setBookMarks(newBookMarks)

  }
 


  return (
    <>
      <Header></Header>
   <div className='flex justify-between w-[80%] m-auto'>
   <Blogs handelBookMark={handelBookMark} handelMarkRead={handelMarkRead}></Blogs>
   <BookMark bookMarks={bookMarks} readingTime={readingTime}></BookMark>
   </div>
      
    </>
  )
}

export default App
