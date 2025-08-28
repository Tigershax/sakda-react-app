import Header from "./components/Header";
import Footer from "./components/Footer";

import { useEffect, useState } from "react";

export default function MyTermProjecr(){
    const [book, setBook] = useState({
        bookTitle: "Web Programming",
        bookDesc: "พัฒนาด้วย React & Tailwind CSS",
        bookPrice : 199,
        bookAuthor : "Beritotai",
        bookCover : "       "

    });

const [nexId, setNextId] = useState (1); //เปลี่ยนจาก 0เป็น1
const [books, setBooks] = useState ([]);
const [bookId, setBookId] =useState(0);
const [count, setCount] =useState(0);
useEffect(() => {
setCount (books.length);
},[books.length]); 

    const myPage ="Sakda term project";
    const myName ="Sakda Prasert";
    const myStudID ="026730491013-1";

    const addBook = (e : any) =>{
        setBooks ([
            ...books,
            {
                id: nexId,
                bookTitle: book.bookTitle,
                bookDesc: book.bookDesc,
                bookPrice: book.bookPrice,
                bookAuthor: book.bookAuthor,
                bookCover: book.bookCover
            }
        ]);

        setNextId(nexId+1);
    }

    const deleteBook = (bookId) => {
        setBooks(
        books.filter((bTmp , index) =>
            bTmp.id !== bookId
    )
        );
    }

const editBook = (bookId) =>{
    alert( bookId ) 
    const bookTmp = books.filter(btmp =>
        btmp.id === bookId
    )
    setBook (bookTmp[0]);
    setBookId (bookId);
}

    const bookItems = books.map((bobj,index)=>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
           <a href="#">
             <img className="rounded-t-lg" src={bobj.bookCover} title={bobj.bookTitle} />
           </a>
           <div className="p-5">
             <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{bobj.bookTitle}</h5>
             </a>
             <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{bobj.bookDesc}</p>
             <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
             onClick={(e)=> editBook(bobj.id)}>
              [E] Edit 
              </a>
              <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
               onClick={(e)=> deleteBook(bobj.id)}>
              [D] Delete
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
              </a>
            </div>
          </div>
   );
    const handleTitleChange = (e : any) =>{
        setBook({
            ...book,
            bookTitle: e.target.value

        });
    }
    const handleDescChange = (e : any) =>{
        setBook({
            ...book,
            bookDesc: e.target.value

        });
    }
    const handlePriceChange = (e : any) =>{
        setBook({
            ...book,
            bookPrice: e.target.value

        });
    }
    const handleAuthorChange = (e : any) =>{
        setBook({
            ...book,
            bookAuthor: e.target.value

        });
    }
    const handleCovereChange = (e :any) =>{
        setBook({
            ...book,
            bookCover: e.target.value

        });
    }

    const resetForm = (e : any) =>{
        setBook({
            bookTitle: " ", bookDesc :"", bookCover : "", bookPrice : 0.0 , bookAuthor : ""
        });

    }

    const updateBook = () => {
        alert("Update:"+bookId)
        const bookTmp = books.map(bTmp =>
        bTmp.id === bookId ?
            {
          ...bTmp,
            
                id: bookId,
                bookTitle: book.bookTitle,
                bookDesc: book.bookDesc,
                bookPrice: book.bookPrice,
                bookAuthor: book.bookAuthor,
                bookCover: book.bookCover
            }
        :
        bTmp    
        )
    
    setBooks(bookTmp);
    resetForm(e);
    setBookId(0);

};
function BookDashboard(){

}
    return(
        <>
        <Header messenger ={myPage}/>
        <p className="text-xl m-3 text-center">
            Name: {myName} Studert ID :{myStudID}
        </p>
         <div className="Flex justify-center w-1/2 grid mx-auto h-100 overflow-auto rounded-2xl border border-gray-300 m-6 ">
       <BookDashboard />
       </div>
         <div className="Flex justify-center w-1/2 grid mx-auto h-100 overflow-auto rounded-2xl border border-gray-300 m-6 ">
       <form className="max-w-sm mx-auto">
            
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">=ชื่อหนังสือ(BookTitle)</label>
            <input
              value={book.bookTitle}
              onChange={handleTitleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">=รายละเอียดหนังสือ(Book Desription:)</label>
            <input
              value={book.bookDesc}
              onChange={handleDescChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">=ราคา(bookPrice)</label>
            <input
              value={book.bookPrice}
              onChange={handlePriceChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-5"></div>
           
           

            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">=ผู้เเต่ง(bookAuthor)</label>
            <input
              value={book.bookAuthor}
              onChange={handleAuthorChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
         
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">=หน้าปก(bookCover)</label>
            <input
              value={book.bookCover}
              onChange={handleCovereChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
             {
            bookId !==0 ?
          <button type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={(e) => updateBook }>
            [U] Updatebook</button> 
        :
         <button type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={addBook}>
            [U]addbook</button> 
        }

         
                
           <button type="button" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={resetForm}>
                ลบหนังสือ</button>

          </div>
          
        </form>



<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
           <a href="#">
             <img className="rounded-t-lg" src={book.bookCover} title={book.bookTitle} />
           </a>
           <div className="p-5">
             <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{book.bookTitle} ({book.bookPrice} THB)
                
              </h5>
             </a>

            
             <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{book.bookDesc}
             </p>
              <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              
              
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
              </a>
            </div>
          </div>
            <div className="w-full mx-auto grid overflow-hide">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 flex">
          {bookItems}
        </div>
      </div>
         </div>
        <Footer messenger = "@ 2525 Sakda - "/>
           </>
    );

}