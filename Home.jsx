import React from 'react';
import  Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  } from '@fortawesome/free-solid-svg-icons';
import {faInstagram ,faWhatsapp,faFacebook,faTwitter,faTelegram} from '@fortawesome/free-brands-svg-icons';
// import WeddingBookingForm from './Login';
// import { useNavigate } from "react-router-dom";
 

function Home() {
  return (
  <div>
  <div><br />
  <Carousel>
      <Carousel.Item>
      <img className='img-fluid'  src='https://t4.ftcdn.net/jpg/06/54/86/35/360_F_654863573_p2MWCQM1lPkXQqIQ5rJRn0fm83rvAAYz.jpg' alt=''  width='100%' height='500px'></img>
        <Carousel.Caption id='poi'>
          <img  src="https://websitedemos.net/wedding-planner-04/wp-content/uploads/sites/147/2017/11/pic10-free-img.png" alt="" className='img-fluid' width='19%' height='230px'/>
          <h3>Country's Best Luxury</h3>
          <h1>Wedding</h1>
          <p>Planners & Event Organizers!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img  className=' img-fluid' src='https://img.freepik.com/premium-photo/wedding-luxury-background-illustration_327072-26664.jpg?semt=ais_hybrid' alt="" width='100%' height='500px'/>
        <Carousel.Caption id='poi'>
        <h3>Country's Best Luxury</h3>
          <h1>Wedding</h1>
          <p>Planners & Event Organizers!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className=' img-fluid'  src='https://png.pngtree.com/thumb_back/fh260/background/20230316/pngtree-wedding-flowers-romantic-background-image_1949273.jpg' alt='' width='100%' height='500px'/>
      <Carousel.Caption id='poi'>
        <h3>Country's Best Luxury</h3>
          <h1>Wedding</h1>
          <p>Planners & Event Organizers!</p>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
    </div><br />
   <div className="container">
    <div className="row">
      <div className="col-md-5">
        <img className='mee  img-fluid' src="https://websitedemos.net/wedding-planner-04/wp-content/uploads/sites/147/2017/11/pic12-free-img.png" alt=""  height='410px' width='100%'/>
      </div>
      <div className="col-md-7">
        <p className='para'><h4>Your Exclusive</h4> <br />
    <h1>Wedding 
    Planners</h1><br />
Dui quam molestie sem do accusamus, mollitia ullamco asperiores conubia, suscipit incidunt, lorem lectus. Tellus molestias dui tristique blandit expedita lorem! Dolorum congue hac, quisque. Tellus molestias dui tristiqu.</p><br />
<button id='buts'> Read More</button>
      </div>
    </div>
   </div><br />
   <div className="container">
    <div className="row">
      <div className="col-md-7">
        <h3 className='paras'>We Plan Wedding's That Are</h3><br />
        <h1  className='paras'>Grand</h1><br />
        <p  className='paras'>Et earum ligula dolor, consectetur, adipiscing ducimus bibendum deleniti, dolorum incididunt voluptatibus ratione pulvinar ipsam blanditiis, aspernatur aptent, sagittis nibh.</p><br />
        <h1  className='paras'>Follow Us</h1><br />
        <p  className='paras'>Eiusmod doloremque sapien beata ctumst laboris feli</p>
        <><FontAwesomeIcon  className='icon'icon={faInstagram} /><FontAwesomeIcon className='icon' icon={faWhatsapp} /><FontAwesomeIcon className='icon' icon={faFacebook} /><FontAwesomeIcon className='icon' icon={faTelegram} /><FontAwesomeIcon  className='icon' icon={faTwitter} /></>
      </div>
      <div className="col-md-5 ">
        <img className='gee img-fluid' src="https://img.freepik.com/premium-photo/love-marry-me-hd-wallpaper_665280-13704.jpg" alt=""  height='410px' width='73%' />
      </div>
    </div>
   </div><br />
   <div className="container">
    <div className="row">
      <div className="col-md-4">
        <img className='gee img-fluid' src="https://websitedemos.net/wedding-planner-04/wp-content/uploads/sites/147/2017/11/pic14-free-img.jpg" alt=""  height='450px' width='80%'/>
        </div><br /><br />
        <div className="col-md-4">
        <img className='gee img-fluid' src="https://websitedemos.net/wedding-planner-04/wp-content/uploads/sites/147/2017/11/pic04-free-img.jpg" alt="" height='199px' width='54%'/><br /><br />
        <img className='gee img-fluid'  src="https://websitedemos.net/wedding-planner-04/wp-content/uploads/sites/147/2017/11/pic02-free-img.jpg" alt=""height='230px' width='54.5%' />
      </div>
      <div className="col-md-4"><br /><br /><br /><br /><br />
          <h3>Select Your Outstanding</h3><br />
          <h1>Wedding Destination!</h1><br />
          <p>Quidem atque aliquid voluptatum eiusmod molestias, expedita erat autem dolores, consequatur sapiente! Quidem atque aliquid voluptatum eiusmod molestias</p><br />
          <button id='butt'> Read More</button>
      </div>
    </div>
   </div><br />
   <div>
<Carousel>
      <Carousel.Item>
        <img src="https://static.vecteezy.com/system/resources/previews/022/769/837/non_2x/beautiful-pink-rose-flower-frame-with-watercolor-for-wedding-birthday-card-background-invitation-wallpaper-sticker-decoration-etc-vector.jpg" alt=""  height='500px' width='1320px'/>
        <Carousel.Caption>
          <div className='con'>
          <h4 >Country's Best Luxury</h4>
          <h1 >Services</h1>
          <p><h3>Looking For A Wedding Planner?</h3></p><br />
          <a href='/Login'><button id='butn'> Booking Now</button></a>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
</Carousel>
    </div>
    <div className="container w-91">
      <div className="row">
        <div className="col-md-12">
        <h1 id='gal'>Our Decoration</h1>
        </div>
      </div><br />
      <div id='pol' className="row">
        <div id='wet' className="col-md-4">
          <img  id='ff'  src="https://5.imimg.com/data5/SELLER/Default/2021/7/TI/WO/DL/52199271/yacu0798-500x500.JPG" alt="" height="230px" width="95%" />
          <p className='ded'>₹ 40000</p>
        </div>
        <div  id='wet'className="col-md-4">
          <img  id='ff'  src="https://www.vermiliondecors.com/assets/images/home/Slider/event-planner-in-chennai.jpg" alt=""  height="230px" width="95%" />
          <p className='ded'>₹ 45000</p>
        </div>
        <div  id='wet'className="col-md-4">
          <img  id='ff'  src="https://img.freepik.com/free-photo/photorealistic-wedding-venue-with-intricate-decor-ornaments_23-2151481511.jpg?semt=ais_hybrid" alt="" height="230px" width="95%"  />
          <p className='ded'>₹ 49000</p>
        </div>
        </div><br />
        <div id='pols'  className="row">
        <div id='wet' className="col-md-4">
          <img id='ff'   src="https://image.wedmegood.com/resized/720X/uploads/member/1992238/1631100844_marriedly_wedding_planner___CSVpj07JAcI___.jpg?crop=4,446,1071,602" alt="" height="230px" width="95%"  />
          <p className='ded'>₹ 36000</p>
        </div>
        <div  id='wet'className="col-md-4">
          <img id='ff' src="https://images.jdmagicbox.com//comp/service_catalogue/wedding-decoration-service-9999px135.x135.190204132733.e8r8-o6gt8jn.jpg" alt="" height="230px" width="95%"  />
          <p className='ded'>₹ 32000</p>
        </div>
        <div  id='wet'className="col-md-4">
          <img  id='ff' src="https://media.weddingz.in/images/20230417115349/chezrosefloraldesigns-1-800x533.jpg" alt="" height="230px" width="95%" />
          <p className='ded'>₹ 41000</p>
        </div>
        </div>
      
      <div id='pol' className="row">
        <div id='wet' className="col-md-4">
          <img  id='ff' src="https://cdn0.weddingwire.in/vendor/4946/3_2/640/jpeg/whatsapp-image-2023-04-19-at-1-37-42-pm-1_15_444946-168189270337275.jpeg" alt=""  height="230px" width="95%" />
          <p className='ded'>₹ 50000</p>
        </div>
        <div  id='wet'className="col-md-4">
          <img  id='ff'  src="https://image.wedmegood.com/resized/720X/uploads/member/743840/1569664163_1.PNG" alt=""  height="230px" width="95%"  />
          <p className='ded'>₹ 54000</p>
          </div>
          <div  id='wet'className="col-md-4">
          <img  id='ff' src="https://t4.ftcdn.net/jpg/03/11/84/05/360_F_311840515_ctrDRfQXI89odFv0aAfZ83FapNOsVs2y.jpg" alt=""  height="230px" width="95%"  />
          <p className='ded'>₹ 54000</p>
          </div>
        </div>
      </div><br /><br />
    <div className="container">
      <div className="row">
        <div  className="col-md-6">
          <h4 className='wer'>"We Plan Wedding’s That Are"</h4>
          <h1 className='gara'>Grand</h1>
          <p className='pae' >'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'</p><br />
          <div className='axe'>
          <FontAwesomeIcon  className='icons'icon={faInstagram} /><FontAwesomeIcon className='icons' icon={faWhatsapp} /><FontAwesomeIcon className='icons' icon={faFacebook} /><FontAwesomeIcon className='icons' icon={faTelegram} /><FontAwesomeIcon  className='icons' icon={faTwitter} /></div>
        </div>
        <div className="col-md-6">
        <center>
          <h2 className='h2'>Reviews</h2><br /><br />
          <table>
        <tr>
          <td><label htmlFor="" >Name</label></td>
          <td><input type="text" placeholder="Your name" /></td>
        </tr><br />
        <tr>
          <td><label htmlFor="" >Number</label></td>
          <td><input type="number" placeholder="Your number" /></td>
        </tr><br />
        <tr>
          <td><label htmlFor="" >Message</label></td>
          <td><textarea type="text"  rows='3' cols='32' placeholder="Your message" /></td>
        </tr><br /><br />
       
        </table></center>
         <button className='her'>Send Message</button>
        </div>
      </div>
      </div><br />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p className='cop'>Copyright © 2024 Wedding Planner</p>
          </div>
          <div className="col-md-6">
            <p className='pow'>Powered by Wedding Planner</p>
          </div>
        </div>
    </div>
    </div>

  );
}
export default Home;

