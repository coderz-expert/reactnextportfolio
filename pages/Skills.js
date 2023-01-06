
import Head from "next/head";
import Image from 'next/image';


const Skills = () => {

    return (
      <> 
      
             

     <div className="fade-in-text">
<div className='skills'>
        <h2>Skills</h2>
        <h4>MY TOP SKILLS</h4>

        <div className='skills-row'>
          <div className='skills-col1'>
            <div className='box-shadow1'>
            <Image
      src="/Images/download.png"
      alt="Landscape picture"
      width={50}
      height={50}
    />
              {/* <img src="./Images/download.png" className='skills-img' /> */}
              <div className='skills-head'>
                <h5>Figma</h5>
                <p>Lorem ipsum text dummy</p>
              </div>
            </div>
          </div>
          <div className='skills-col1'>
            <div className='box-shadow1'>
            <Image
      src="/Images/download (1).png"
      alt="Landscape picture"
      width={50}
      height={50}
    />
              {/* <img src="./Images/download (1).png" className='skills-img' /> */}
              <div className='skills-head'>
                <h5>Node js</h5>
                <p>Lorem ipsum text dummy</p>
              </div>
            </div>
          </div>
          <div className='skills-col1'>
            <div className='box-shadow1'>
            <Image
      src="/Images/download (2).png"
      alt="Landscape picture"
      width={50}
      height={50}
    />
              {/* <img src="./Images/download (2).png" className='skills-img' /> */}
              <div className='skills-head'>
                <h5>Adobe Photoshop</h5>
                <p>Lorem ipsum text dummy</p>
              </div>
            </div>
          </div>
        </div>
        <div className='skills-row'>
          <div className='skills-col2'>
            <div className='box-shadow2'>
            <Image
      src="/Images/react.a85d127d.png"
      alt="Landscape picture"
      width={50}
      height={50}
    />
              {/* <img src="./Images/react.a85d127d.png" className='skills-img' /> */}
              <div className='skills-head'>
                <h5>React js</h5>
                <p>Lorem ipsum text dummy</p>
              </div>
            </div>
          </div>
          <div className='skills-col2'>
            <div className='box-shadow2'>
            <Image
      src="/Images/download (3).png"
      alt="Landscape picture"
      width={50}
      height={50}
    />
              {/* <img src="./Images/download (3).png" className='skills-img' /> */}
              <div className='skills-head'>
                <h5>Sketch</h5>
                <p>Lorem ipsum text dummy</p>
              </div>
            </div>
          </div>
          <div className='skills-col2'>
            <div className='box-shadow2'>
            <Image
      src="/Images/python.7dcb8405.png"
      alt="Landscape picture"
      width={50}
      height={50}
    />
              {/* <img src="./Images/python.7dcb8405.png" className='skills-img' /> */}
              <div className='skills-head'>
                <h5>Python</h5>
                <p>Lorem ipsum text dummy</p>
              </div>
            </div>
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

export default Skills;