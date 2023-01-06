
import { BsEnvelopeFill } from 'react-icons/bs';
import { FiPhone, FiInstagram } from 'react-icons/fi';

const Contact = () => {
 
  return (
    <>
     

 <div className='inner-contact-wrapper'>
        <h3 className='inner_heading'>Contact Me</h3>
        <h1 className='inner_sort_heading'>GET IN TOUCH</h1>
        <div className='contact_column'>
          <div className='contact_form'>
            <form>
              <input type="Name"
                name="Name"
                placeholder="Name" /><br /><br />
              <input type="Email"
                name="Email"
                placeholder="Email" />
              <br /><br />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
        <div className='contact_column'>
          <div className='conatct_info'>
            <ul>
              <li><BsEnvelopeFill /><span>codeaprogram@gmail.com</span></li>
              <li><FiPhone /><span>+91 1234 56778</span></li>
              <li><FiInstagram /><span>codeaprogram</span></li>
            </ul>


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
export default Contact;