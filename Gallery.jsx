import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp, faFacebook, faTwitter, faTelegram } from '@fortawesome/free-brands-svg-icons';

function Gallery() {
  return (
    <div className="gallery-container">
      {/* Carousel Section */}
      <div>
        <Carousel>
          <Carousel.Item>
            <img className='carousel-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhtxufOQ5KiAKi5oBbhLuDh0Gf40GIDHFRFA&s' alt="Wedding decoration" />
            <Carousel.Caption>
              <img src="https://websitedemos.net/wedding-planner-04/wp-content/uploads/sites/147/2017/11/pic10-free-img.png" alt="Wedding couple" height='144px' width='230px'/>
              <h5>Our Exclusive Wedding</h5>
              <h1>Gallery</h1>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div><br /><br />

      {/* Image Gallery Section */}
      <div className="container">
        <div className="row">
          <div id="wet" className="col-md-4">
            <img src="https://t4.ftcdn.net/jpg/06/39/80/75/360_F_639807553_uwUKbAadh2moLIRDQo4vzYJo1CeQLNYH.jpg" alt="Wedding decor" className="gallery img-fluid" />
          </div><br />
          <div id="wet" className="col-md-4">
            <img src="https://wallpapers.com/images/hd/indian-wedding-background-idupjegwa7asdnyi.jpg" alt="Indian wedding background" className="gallery img-fluid" />
          </div><br />
          <div id="wet" className="col-md-4">
            <img src="https://t4.ftcdn.net/jpg/07/27/40/63/360_F_727406363_dM5dSHtNhxLUUR0zbrlUKaD509Vmi0s6.jpg" alt="Hindu wedding ceremony" className="gallery img-fluid" />
          </div>
          </div><br />
        
        <div className="row">
          <div id="wet" className="col-md-4">
            <img src="https://t4.ftcdn.net/jpg/06/39/80/75/360_F_639807597_seKOvbtFZfSY63D1EqFrcp4RDYvEyy6r.jpg" alt="Wedding flowers" className="gallery img-fluid" />
          </div><br />
          <div id="wet" className="col-md-4">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/038/808/963/small_2x/ai-generated-happy-beautiful-and-indian-couple-smiling-looking-at-camera-while-standing-against-blurred-indian-free-photo.jpeg" alt="Indian couple smiling" className="gallery img-fluid" />
          </div><br />
          <div id="wet" className="col-md-4">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/038/808/951/small_2x/ai-generated-happy-beautiful-and-indian-couple-smiling-looking-at-camera-while-standing-against-blurred-indian-free-photo.jpeg" alt="Happy Indian couple" className="gallery img-fluid" />
          </div>
          </div> <br />
          <div className="row">
          <div id="wet" className="col-md-4">
            <img src="https://t3.ftcdn.net/jpg/06/79/18/48/360_F_679184899_vkb4XBBaKi3yScsH82wQCeKaOMEL25CG.jpg" alt="Wedding vows" className="gallery img-fluid" />
          </div><br />
          <div id="wet" className="col-md-4">
            <img src="https://plus.unsplash.com/premium_photo-1682090795093-9b9434a455ec?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwd2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D" alt="Wedding ceremony" className="gallery img-fluid" />
          </div><br />
          <div id="wet" className="col-md-4">
            <img src="https://e1.pxfuel.com/desktop-wallpaper/603/365/desktop-wallpaper-marriage-convention-v-design-we-print-kerala-wedding.jpg" alt="Marriage convention" className="gallery img-fluid" />
          </div>
          </div>
      
      </div><br /><br />

      {/* Video Section */}
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <video className="video" width="640" height="360" controls>
              <source src="https://websitedemos.net/wedding-planner-04/wp-content/uploads/sites/147/2017/12/wed-free-img.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div id="viod" className="col-md-5">
            <h5 className="h5">Voluptas Scelerisque Quod</h5>
            <h1 id="h1"> Ayesha & Tony</h1>
          </div>
        </div>
      </div><br /><br />

      <div id="chan" className="container">
        <div className="row">
          <div id="viods" className="col-md-5">
            <h5>Voluptas Sceleri</h5>
            <h1 id="h1s">Monica &<br />Chandler</h1>
          </div>
          <div className="col-md-7">
            <video className="videos" width="640" height="360" controls>
              <source src="https://websitedemos.net/wedding-planner-04/wp-content/uploads/sites/147/2017/12/wed02-free-img.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div><br /><br />

      {/* Call to Action Section */}
      <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h4 className='wer'>"We Plan Wedding’s That Are"</h4>
          <h1 className='gara'>Grand</h1>
          <p className='pae'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p><br />
          <div className='axe'>
            <FontAwesomeIcon className='icons' icon={faInstagram} />
            <FontAwesomeIcon className='icons' icon={faWhatsapp} />
            <FontAwesomeIcon className='icons' icon={faFacebook} />
            <FontAwesomeIcon className='icons' icon={faTelegram} />
            <FontAwesomeIcon className='icons' icon={faTwitter} />
          </div>
        </div>
        <div className="col-md-6">
                    <center>
                        <h2 className='res'>Reviews</h2><br /><br />
                        <table>
                            <tr>
                                <td><label>Name</label></td>
                                <td><input type="text" placeholder="Your name" /></td>
                            </tr><br />
                            <tr>
                                <td><label>Number</label></td>
                                <td><input type="number" placeholder="Your number" /></td>
                            </tr><br />
                            <tr>
                                <td><label>Message</label></td>
                                <td><textarea rows='3' cols='32' placeholder="Your message" /></td>
                            </tr>
                        </table>
                    </center><br />
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

export default Gallery;
