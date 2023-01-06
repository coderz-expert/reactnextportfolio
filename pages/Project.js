import Link from 'next/link';
import Image from 'next/image';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";


const Project= () => {


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
      <>
      
         
      
<div className="Project">
<div className="fade-in-text">
<h1>Projects</h1>
<h2>MY CREATION</h2>
<div className="fade-out-image">
{/* <img src="./Images/" className='personimg' /> */}
</div>
<div className='SliderSet'>
<div>
      <Slider {...settings}>
      <div>
        
           <Image
      src="/Images/img1.ac0453a3.png"
      alt="Landscape picture"
      width={800}
      height={500}
    />
      
      </div>
      <div>
           
      <Image
      src="/Images/img2.bccacc9d.png"
      alt="Landscape picture"
      width={800}
      height={500}
    />
     
      </div>
      <div>
      <Image
      src="/Images/img3.84e5e7a8.png"
      alt="Landscape picture"
      width={800}
      height={500}
    />
      </div>
    </Slider>
      </div>
</div>
</div>
</div>
<div className='footer'>
<h6 className='footer-head'>SHARAD PATEL</h6>
        codeaprogram © All CopyRights Reserved 2022
   
      </div>
    
</>

);
};
export default Project;