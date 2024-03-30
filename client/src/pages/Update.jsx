import axios from 'axios'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Update = () => {
const [book,setBook] = useState({
  title : "",
  desc : "",
  price: null,
  cover: "",
})

const navigate = useNavigate()
const location= useLocation()

const bookId = location.pathname.split('/')[2]

const handlechange = (e) => {
  setBook(prev =>({...prev, [e.target.name] : e.target.value }))
}

const handleclick = async e =>{
  e.preventDefault()

  try{
    await axios.put("http://localhost:8800/books/"+ bookId,book)
    navigate("/")
  }catch(err){
      console.log(err)
  }
}

console.log(book)

  return (
    <div className='form'>
      <h1>Update the book</h1>
      <input type="text" name="title" onChange={handlechange} id="" placeholder='title'/>
      <input type="text" name="desc"onChange={handlechange} id="" placeholder='desc'/>
      <input type="text" name="cover" onChange={handlechange} id="" placeholder='cover'/>
      <input type="number" name="price" onChange={handlechange} id="" placeholder='price'/>

      <button className='formButton' onClick={handleclick}>Update</button>
    </div>
  )
}

export default Update