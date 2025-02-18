import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp, faFacebook, faTwitter, faTelegram } from '@fortawesome/free-brands-svg-icons';

function Contact() {
    return (
        <div>
            {/* Carousel */}
            <Carousel>
                <Carousel.Item>
                    <img className="name" src="https://images4.alphacoders.com/134/1345530.png" alt="Contact Us" />
                    <Carousel.Caption>
                        <div className="kit">
                            <h4>Voluptate Doloribu</h4>
                            <h1>Contact Us</h1>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <br /><br />

            {/* Content Section */}
            <div className="container">
                <div className="row">
                    {/* Left Section: Wedding Packages and Social Links */}
                    <div className="col-md-6">
                        <h2>Perfectly Designed Complete</h2>
                        <h2>Wedding Packages!</h2><br />
                        <p>Pharetra fugiat, adipiscing quo felis nisi eiusmod iaculis lectus metus sagittis metus doloremque esse nostrud, numquam, fugit voluptates, voluptatem, ante! Ipsum sunt, inventore ultricies. Doloremque.</p>
                        <h5>Follow Us:</h5>
                        <div className="axes">
                            <FontAwesomeIcon className="lion" icon={faInstagram} />
                            <FontAwesomeIcon className="lion" icon={faWhatsapp} />
                            <FontAwesomeIcon className="lion" icon={faFacebook} />
                            <FontAwesomeIcon className="lion" icon={faTelegram} />
                            <FontAwesomeIcon className="lion" icon={faTwitter} />
                        </div>
                    </div>

                    {/* Right Section: Booking Form */}
                    <div className="col-md-6">
                        <center>
                            <h2>Booking</h2><br /><br />
                            <table>
                                <tbody>
                                    <tr>
                                        <td><label htmlFor="name">Name</label></td>
                                        <td><input type="text" id="name" placeholder="Your name" /></td>
                                    </tr><br />
                                    <tr>
                                        <td><label htmlFor="number">Number</label></td>
                                        <td><input type="number" id="number" placeholder="Your number" /></td>
                                    </tr><br />
                                    <tr>
                                        <td><label htmlFor="date">Date</label></td>
                                        <td><input type="date" id="date" /></td>
                                    </tr><br />
                                </tbody>
                            </table>
                        </center>
                        <a href="/Login">
                            <button className="her">Book Now</button>
                        </a>
                    </div>
                </div>
            </div>
            <br />

            {/* Image Section */}
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <img id="pho" src="https://websitedemos.net/wedding-planner-04/wp-content/uploads/sites/147/2017/12/pic48-free-img.jpg" alt="Wedding" />
                    </div>
                </div>
            </div>
            <br />

            {/* Contact Info Section */}
            <div id="add" className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h4>Address:</h4><br />
                        <h5>opp. Vitae International Accounting systems, Ramakrishna Nagar, New Siddhapudur, Coimbatore, Tamil Nadu 641044</h5>
                    </div>
                    <div className="col-md-4">
                        <h4>Phone:</h4><br />
                        <h5>9087552359 & 9067550921</h5>
                    </div>
                    <div className="col-md-4">
                        <h4>Email:</h4><br />
                        <h5>info@example.com <br /> example@info.com</h5>
                    </div>
                </div>
            </div>
            <br />

            {/* Google Map Embed */}
            <div className="row">
                <div className="col-md-12">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2440911003087!2d76.9770289750454!3d11.020304189143646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8584e1f36a58d%3A0xbae627175bab2da!2sSarva%20Events%20and%20Wedding%20Planners!5e0!3m2!1sen!2sin!4v1736149296422!5m2!1sen!2sin" 
                        width="1254" height="243" allowFullScreen="" title="Google Map" 
                        style={{ border: 0 }}
                    />
                </div>
            </div>
            <br />
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
            </div><br />
            
            <div className="row">
                <div className="col-md-6">
                    <p className='cop'>Copyright © 2024 Wedding Planner</p>
                </div>
                <div className="col-md-6">
                    <p className='pow'>Powered by Wedding Planner</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;
