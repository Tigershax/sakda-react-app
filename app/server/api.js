import express from 'express';
import cors from 'cors';

import admin from 'firebase-admin'
import serviceAccount from './firebase/webprog-1013-1-firebase-adminsdk-fbsvc-69e09bd66f.json'with{ type :'json'};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();

const app = express()
const port = 3000

app.use(express.json());
app.use(cors());

// Get data from Books collection

async function fetchDataDB() {
    const result =[];
    const booksRef =db.collection('Books');
    const booksSnap =await booksRef.get();
    booksSnap.forEach(doc => {
        result.push({
           id: doc.id,
           ...doc.data() 
        });
    });
    return result;

}

// http://localhost:3000/api/insert --> Add a new book
async function addBook(title,author) {
  const newBookRef = db.collection('Books').doc();
  const docRef = db.collection('Books').doc(newBookRef.id);
  await docRef.set(title , author);
  console.log('Book added!');
}
 
app.post('/api/insert', (req, res) => {
  try {
    const { title , author } = req.body;
    console.log(title ,author);
    const newBook = { id: String(books.length + 1), title , author };
    // books.push(newBook);
    addBook(title , author);
    res.status(201).json({ success: true, message: 'Form submitted successfully.' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
})

app.get('/api/getBooksFromDB',(req,res) => {
    res.set('Content-type','application/json');
    fetchDataDB().then((jsonData)=>{
        res.json(jsonData);
    }).catch((error)=>{
        res.json(error);
    });
    })


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