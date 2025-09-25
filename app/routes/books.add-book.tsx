import { useState,useEffect } from "react";

export default function AddBook(){
    
    const [inputTitel,setInputTitel] = useState("");
    const [inputAuthor,setInputAuthor] = useState("");
    
   const handleSubmit= async (e:any) =>{
    
    e.prevenDefault();
    try{
        const resAddBook =await fetch ('http://localhost:3000/api/insert',
        {
            method : 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
        body: JSON.stringify({ title:inputTitel,author: inputAuthor})
        }
    );
    const result =await resAddBook.json();
    alert('Add a new book ID' + result.id);
        }catch  (error){
            alert ('Error submitting data:'+ error);
        }
    }
    return(
        <form onSubmit={handleSubmit}>
            <label>ชื่อหนังสือ:</label>
            <input type="text"
            value={inputTitel}
            onChange={(e)=>setInputTitel(e.target.value)}
            />
            <label>ชื่อผู้แต่ง</label>
            <input type="text"
            value={inputAuthor}
            onChange={(e)=>setInputAuthor(e.target.value)}
        />
            <button type="submit">Add Book</button>
            
            </form>
    );
   }


