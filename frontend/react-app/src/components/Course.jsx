import { Link } from "react-router-dom"
import Cards from "./Cards"
import axios from "axios"
import { useEffect, useState } from "react"
const Course = () => {
    const [book,setBook]=useState([])
   useEffect(()=>{
    const getBook= async()=>{
        try {
            const res =await axios.get("http://localhost:3000/book")
           
            setBook(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    getBook()
   },[])
  return (
   <>
   <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
    <div className="mt-28 items-end justify-center text-center">
        <h1 className="text-2xl font-semibold md:text-4xl">
            We are delighted to have you <span className="text-pink-500">Here! :)</span></h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium illum porro blanditiis doloremque laboriosam, rerum in accusamus fuga at dignissimos 
                vitae enim quod labore natus similique totam dolorem odit incidunt.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium illum porro blanditiis doloremque laboriosam, rerum in accusamus fuga at dignissimos 
                vitae enim quod labore natus similique totam dolorem odit incidunt.
            </p>
           <Link to="/">
           <button className="bg-pink-500 text-white rounded-md 
            hover:bg-pink-800 duration-300 mt-6 px-4 py-2">Back</button>
           </Link>
    </div>
    <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
        {
            book.map((item)=>(
                <Cards item={item} key={item.id}/>
            ))
        }
    </div>

   </div>
   </>
  )
}

export default Course
