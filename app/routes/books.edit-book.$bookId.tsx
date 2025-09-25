import { useState,useEffect } from "react";
import  { useParams } from "@remix-run/react"

export default function AddBook(){
     const [inputID, setInputId]=useState(0);
    const [inputTitel,setInputTitel] = useState("");
    const [inputAuthor,setInputAuthor] = useState("");
    
  const {bookId} = useParams();
    useEffect(() =>{
        const fetcData = async() =>{
            try{
                const resBook = await fetch( `http://localhost:3000/api/getbooks/${bookId} `)
                if(resBook.ok){
                    const result = await resBook.json();
                    setInputId(result.id);
                    setInputTitel(result.title);
                    setInputAuthor(result.author);
                }else{
                    alert ('APIs is wrong.');
                }
            } catch (error){
                alert ('Error fetching data:'+ error);
            }
        }
        fetcData();
    },[]);

   
    const handIesubmit =async (e:any) =>{
    e.preventDefault();
    try{
        const resAddBook = await fetch ('http://localhost:3000/api/update',
        {
            method : 'POST',
            headers: {

                'Content-type' : 'application/json'
            },
        body: JSON.stringify({ id:inputID,title:inputTitel,author: inputAuthor})
        }
    );
    const result =await resAddBook.json();
    alert('Update a new book ID' + result.message);
        }catch  (error){
            alert ('Error submitting data:'+ error);
        }
    }
    return(
        <form onSubmit={handIesubmit}>
            <input type ="hidden"value={inputID}/>
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
            <button type="submit">Update Book</button>
            </form>
            
            
            
    );
   }


