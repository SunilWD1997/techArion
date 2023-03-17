import './footer.css';
import { AiFillFacebook, AiFillYoutube } from 'react-icons/ai';
import { RiInstagramFill } from 'react-icons/ri';


const Footer = () => {
  return (
    <div className="footer">
  <img src="/images/Vector.png" alt="" />
  <h5>Dessert.Bar.Kitchen</h5>
  <p>+040 2355 7261</p>
  <p>savory@qodeinteractive.com</p>
  <p> Jubilee Hills, Hyderabad, Telangana 500033</p>
  <p>Plot No.8-2, 293/82/A/161, Rd Number 13,</p>
  <div className="logs">
<AiFillFacebook className='icons'/>
<RiInstagramFill  className='icons'/>
<AiFillYoutube  className='icons'/>
  </div>
  <hr />
  <p>@TECHARION 2023</p>
    </div>
  )
}

export default Footer