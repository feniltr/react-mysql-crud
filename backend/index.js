import express from "express"
import mysql from "mysql"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

const db  = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"fenil@786",
    database: "test"
})

app.get("/",(req,res) =>{
    res.json("Hello This is backend");
})

app.get("/books",(req,res) => {
    const q = "select * from books"
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })

    db.on('error', (err) => {
        console.error('MySQL connection error:', err);
        // Handle the error as needed, e.g., attempt to reconnect, log the error, etc.
    });
})

app.post("/books",(req,res) => {
    const q = "insert into books (`title`,`desc`,`cover`,`price`) values (?,?,?,?)"
    const values = [
        req.body.title,
        req.body.desc,
        req.body.cover,
        req.body.price
    ]

    db.query(q,values, (err,data) => {
        if(err) return res.json(err)
        return res.json("Books creted")
    })
})

app.delete("/books/:id", (req,res) => {
    const bookId = req.params.id;
    const q = "delete from books where id = ?"

    db.query(q,[bookId],(err,data) =>{
        if(err) return res.json(err)
        return res.json("Record deleted")
    })
})


app.put("/books/:id", (req,res) => {
    const bookId = req.params.id;
    const q = "update books set `title` = ? , `desc` = ? , `cover` = ? , `price` = ? where id  = ?";

    const values = [
        req.body.title,
        req.body.desc,
        req.body.cover,
        req.body.price
    ]


    db.query(q,[...values,bookId],(err,data) =>{
        if(err) return res.json(err)
        return res.json("Record Updated")
    })
})



app.listen(8800, () => {
    console.log("Backend is working");
})