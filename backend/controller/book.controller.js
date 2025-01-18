import Book from "../modal/book.modal.js"


export const getBook= async(req,res)=>{
    try {
        const data=await Book.find({})
        res.send(data)
    } catch (error) {
        res.status(500).json({message:"failed to get data",success:false})
    }
}