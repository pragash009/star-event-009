import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp, faFacebook, faTwitter, faTelegram } from '@fortawesome/free-brands-svg-icons';

function Venues () {
    return (
        <div>
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img className='name' src='https://img.freepik.com/premium-photo/elegant-floral-wedding-backdrop-wallpaper_756748-2486.jpg' alt='Wedding Venue'></img>
                        <Carousel.Caption>
                            <div className="kat">
                                <h4>Our Exclusive Wedding</h4>
                                <h1>Venues</h1>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div><br /><br />
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src="https://websitedemos.net/wedding-planner-04/wp-content/uploads/sites/147/2017/12/pic51-free-img.jpg" alt=""   className="img-fluid"  height='450px' width='100%'/>
                        <div className="land"><br />
                            <h4>Maui Island</h4><br />
                            <h1>Villa Balbiano</h1>
                            <p>Integer pharetra, luctus repudiandae, nesciunt dicta nonummy primis quae parturient ta nonum ta nonum.</p><br />
                            <h5>CAPACITY: 500 | BOAT ACCESS: Yes</h5>
                            <h5>ACCOMMODATION: Yes</h5>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src="https://websitedemos.net/wedding-planner-04/wp-content/uploads/sites/147/2017/12/pic52-free-img.jpg" alt=""   className="img-fluid"  height='450px' width='100%'/>
                        <div className="land"><br />
                            <h4>Bangkok</h4><br />
                            <h1>SKADYFERNIX</h1>
                            <p>Integer pharetra, luctus repudiandae, nesciunt dicta nonummy primis quae parturient ta nonum ta nonum.</p><br />
                            <h5>CAPACITY: 700 | BOAT ACCESS: Yes</h5>
                            <h5>ACCOMMODATION: Yes</h5>
                        </div>
                    </div>
                </div>
            </div><br />
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src="https://websitedemos.net/wedding-planner-04/wp-content/uploads/sites/147/2017/12/pic53-free-img.jpg" alt=""   className="img-fluid"  height='450px' width='100%'/>
                        <div className="land"><br />
                            <h4>Aljaferia Palace</h4><br />
                            <h1>Zaragoza</h1>
                            <p>Integer pharetra, luctus repudiandae, nesciunt dicta nonummy primis quae parturient ta nonum ta nonum.</p><br />
                            <h5>CAPACITY: 750 | RIVER VIEW: Yes</h5>
                            <h5>ACCOMMODATION: Yes</h5>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src="https://websitedemos.net/wedding-planner-04/wp-content/uploads/sites/147/2017/12/pic52-free-img.jpg" alt="" className="img-fluid"  height='450px' width='100%'/>
                        <div className="land"><br />
                            <h4>Ranthambore</h4><br />
                            <h1>Rajasthan</h1>
                            <p>Integer pharetra, luctus repudiandae, nesciunt dicta nonummy primis quae parturient ta nonum ta nonum.</p><br />
                            <h5>CAPACITY: 650 | RIVER VIEW: Yes</h5>
                            <h5>ACCOMMODATION: Yes</h5>
                        </div>
                    </div>
                </div>
            </div><br /><br />
            <button className="yellow">Read more</button><br /><br />
            <div className="container">
           <div id='cal' className="row">
                           <div className="col-md-6">
                               <h4 className='wer'>"We Plan Wedding’s That Are"</h4>
                               <h1 className='gara'>Grand</h1>
                               <p className='pae'>'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'</p><br />
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

export default Venues;
