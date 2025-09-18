import { FormEventHandler, useState  } from "react";
export default function AddBook(){
    const [inputTitel,setInputTitel] = useState("");
    const [inputAuthor,setInputAuthor] = useState("");
   const handleSubmit= () =>{
    alert(`Book Titel: ${inputTitel}, Author: ${inputAuthor}`);
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
    )
} 
