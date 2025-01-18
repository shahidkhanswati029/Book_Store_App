import Footer from "./Footer"
import Navbar from "./Navbar"


const Contact = () => {
  return (
    <div>
      <Navbar/>
      <div className="min-h-screen mt-40 item justify-center text-center
      border-[2x] w-100 max-w-screen-2xl container 
    mx-auto md:px-20 px-4">
      
      
      <div className="border-[2px] shadow-md p-10 ">
        <h2 className="font-bold text-xl ">Contact us</h2>
        <br /> <br />
      <input type="text" placeholder="Enter your Name" className="w-100 px-5 py-2 outline"  />
      <br /> <br /> <br />
      <input type="text" placeholder="Enter your Email" className="w-100 px-5 py-2 outline" />

      <br /> <br />
      <textarea rows={8} cols={86}  placeholder="Enter your remarks " className="outline "></textarea>
      <br /> <br />
      <button className="btn btn-active btn-secondary ">Submit</button>
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact
