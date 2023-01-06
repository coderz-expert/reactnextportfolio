import Link from "next/link";
import Image from "next/image";
import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';


const Navbar = () => {
  const [isOpen, setIsopen] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  }

  return (
    <div className='navbar_inner'>
      <div className="container-fluid mt-3">

        <nav className="navbar navbar-expand-lg navbar-light shadow-md">
          <div className="container-fluid p-2">
            {/* <a className="navbar-brand text-primary mr-0">Company Logo</a> */}
            <div className="form-inline ml-auto">
              <div className="btn btn-primary" onClick={ToggleSidebar} >
                <GiHamburgerMenu />
              </div>
            </div>
          </div>
        </nav>
        <div className={`sidebar ${isOpen == true ? 'active' : ''}`}>
          <div className="sd-header">
            {/* <h4 className="mb-0">Sidebar Header</h4> */}
            <div className="btn btn-primary" onClick={ToggleSidebar}><AiOutlineClose /></div>
          </div>
          <div className="sd-body">
            <ul>
              <li className='menu-list'>
                <Link href="/">Home </Link>
              </li>
              <li className='menu-list'>
                <Link href="/Skills">Skills</Link>
              </li>
              <li className='menu-list'>
                <Link href="/Service">Service</Link>
              </li>
              <li className='menu-list'>
                <Link href="/Project">Project</Link>
              </li>
              <li className='menu-list'>
                <Link href="/Hireme">Hire Me</Link>
              </li>
              <li className='menu-list'>
                <Link href="/Contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={`sidebar-overlay ${isOpen == true ? 'active' : ''}`} onClick={ToggleSidebar}></div>
      </div>
</div>

  );
};

export default Navbar;