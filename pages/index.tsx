
import Image from 'next/image';


const Index = () => {

  return (
    <>
    

      <div className='inner_banner_headerpart'>
        <div className='head-row'>
          <div className='header-section_title'>
            <h1>SHARAD PATEL</h1>
          </div>


          <div className='banner_index_column two'>
            <div className="fade-in-image">
              {/* <img src="./Images/S patel.jpg" className='personimg' /> */}
        <Image
      src="/Images/S patel.jpg"
      alt="Landscape picture"
      width={800}
      height={500}
    />
            </div>
          </div>
          <div className='banner_index_column one'>
            <div className='banner_info_section'>
              <h1>Full Stack Developer</h1>

              <div className='main_contect_banner'>
                <p className='nopra'>11+ </p>
                <h6>Years of Experinse in Web development</h6>
              </div>



              <div className='main_contect_banner'>
                <h6>Projects Worked in my career</h6>
                <p className='nopra'>200+</p>
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
  )


















};
export default Index;


