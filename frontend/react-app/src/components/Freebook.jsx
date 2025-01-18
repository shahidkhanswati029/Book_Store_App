
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios"
import Slider from "react-slick";
import Cards from "./Cards";
import { useEffect, useState } from "react";
const Freebook = () => {
   

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

const [book, setBook] = useState([]);
      useEffect(() => {
        const getBook = async () => {
          try {
            const res = await axios.get("http://localhost:3000/book");
            const resdata = res.data.filter((data) => data.category === "Free"); // Corrected syntax
            setBook(resdata);
          } catch (error) {
            console.log(error);
          }
        };
        getBook();
      }, []);
  return (
   <>
   <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
    <h1 className="font-semibold text-xl ">Free offered courses</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Ex mollitia maxime non assumenda nam ad id dolores delectus quo doloremque,
         qui 
        nulla laboriosam corporis ratione eum? Expedita, soluta magni. Mollitia.</p>
  
   <div>
   <Slider {...settings}>
        {
            book.map((item)=>(
                <Cards item={item} key={item.id}/>
            ))
        }
   
      </Slider>
   </div>
   </div>
   </>
  )
}

export default Freebook
