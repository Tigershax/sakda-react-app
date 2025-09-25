import express from 'express';
import cors from 'cors';

const app = express()
const port = 3000

app.use(express.json());
app.use(cors());
let books = [
    {id: 1, title: 'Web Technology', author: 'Beritokai 1 '},
    {id: 2, title: 'Web Technology', author: 'Beritokai 2 '},
];
app.get('/', (req, res) => {
res.send('Hello World!')
})
 
app.post('/api/books',(req,res)=>{
    const {title,author}= req.body;
    const newBook = {id : Strinh (books.length + 1 ), title, author};
    books.push(newBook);
    res.status(201).json(newBook);
})

// http://localhost:3000/api/getbooks
app.get('/api/getbooks', (req ,res )=>{
    res.json(books);
})

// http://localhost:3000/api/getbooks
app.get('/api/getbooks/:book_id', (req ,res )=>{
    let bid = Number(req.params.book_id);
    const result =books.filter(
        bObj => {
            return bObj.id === bid
        }
    );
    res.json(result[0]);
})  

app.post('/api/update',(req, res)=>{
    const {id,in_title,in_author} = req.body;
    console.log('Data:',id,in_title,in_author);
    const updBooks =books.map(
        bObj =>{
            if(bObj.id === Number(id)){
                return {...bObj , title: in_title , author: in_author};
            }
            return bObj;
        }
    );
    console.log('Updated:'+ updBooks);
    res.json({message: 'Updated...'});

})
app.listen(port, () => {
console.log( `Example app listening on port ${port}`)
})