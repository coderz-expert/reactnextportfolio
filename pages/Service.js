import Link from 'next/link';
import React from 'react';

import Image from 'next/image';

const Service = () => {
  
  return (
    <>

      <div className="inner_service_wrapper">
        <h1 className='services_heading'>Services</h1>
        <h2 className='services_sort_heading'>WHAT I OFFER</h2>
        <div className='Service-row'>
          <div className='Service-col'>
            <div className='service-box-shadow'>
            <Image
      src="/Images/download (4).png"
      alt="Landscape picture"
      width={200}
      height={100}
    />
         
              {/* <img src="./Images/download (4).png" className='service-img1' /> */}
              <h5>Web Development</h5>
              <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean</p>
            </div>
          </div>
          <div className='Service-col'>
            <div className='service-box-shadow'>
            <Image
      src="/Images/download (5).png"
      alt="Landscape picture"
      width={200}
      height={100}
    />
              {/* <img src="./Images/download (5).png" className='service-img' /> */}
              <h5>Web Development</h5>
              <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean</p>
            </div>
          </div>
          <div className='Service-col'>
            <div className='service-box-shadow'>
            <Image
      src="/Images/download (6).png"
      alt="Landscape picture"
      width={200}
      height={100}
    />
              {/* <img src="./Images/download (6).png" className='service-img' /> */}
              <div>
                <h5>Web Development</h5>
                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean</p>
              </div></div>
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

export default Service;