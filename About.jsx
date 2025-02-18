import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp, faFacebook, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons';

function About() {
    return (
        <div>
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img className='name img-fluid' src='https://c1.wallpaperflare.com/preview/878/736/41/nature-flower-flora-season.jpg' alt="carousel-background" />
                        <Carousel.Caption>
                            <img src="https://websitedemos.net/wedding-planner-04/wp-content/uploads/sites/147/2017/11/pic10-free-img.png" alt="wedding-planner" height='144px' width='230px' />
                            <h5>Facilisis Fugit Blanditiis Corrupti</h5>
                            <h1>About Us</h1>
                            <h2>Start Planning Your Wedding</h2>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div><br /><br />
            <div id='red' className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h5>Looking for Perfection?</h5>
                        <h1>We Are Here To Help</h1>
                        <h1>You!</h1>
                        <p>Dui quam molestie sem do accusamus, mollitia ullamco asperiores conubia, <br />suscipit incidunt, lorem lectus. Tellus molestias dui tristique blandit expedita <br />lorem! Dolorum congue hac, quisque. Tellus molestias dui tristiqu.</p>
                    </div>
                </div>
            </div><br /><br />
            <div id="green" className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h3>Collaborate With Us</h3>
                        <p>Sodales provident</p>
                    </div>
                    <div className="col-md-4">
                        <h3>Select Destination</h3>
                        <p>Sodales provident</p>
                    </div>
                    <div className="col-md-4">
                        <h3>Start Planning</h3>
                        <p>Sodales provident</p>  
                    </div>
                </div>
            </div><br />
            
            <div id="pom" className="container">
                <div className="row">
                    <div className="col-md-7">
                        <h5 id="met">Meet Our</h5>
                        <h1 id="lan">Planners</h1>
                        <p className="dal">Doloribus, eiusmod amet nostrud dolore, dicta tincidunt malesuada euismod urna. Placeat veniam ipsam velit, venenatis. Iste! Gravida modi expedita rerum officiis aut placeat. Placeat veniam ipsam velit, venenatis. Iste! Gravida modi expedita.</p>
                    </div>
                </div>
            </div><br /><br />
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <img src="https://websitedemos.net/wedding-planner-04/wp-content/uploads/sites/147/2019/11/team-1.jpg" alt="" className="img-fluid" height='450px' width='100%'/>
                        <h3>Raja Shree</h3><br />
                        <h6>Co Founder & Coordinator</h6><br />
                        <FontAwesomeIcon className='ico' icon={faInstagram} />
                        <FontAwesomeIcon className='ico' icon={faWhatsapp} />
                        <FontAwesomeIcon className='ico' icon={faFacebook} />
                        <FontAwesomeIcon className='ico' icon={faTelegram} />
                    </div>
                    <div className="col-md-3">
                        <img src="https://websitedemos.net/wedding-planner-04/wp-content/uploads/sites/147/2019/11/team-3.jpg" alt="" className="img-fluid" height='450px' width='100%'/>
                        <h3>Pragash</h3><br />
                        <h6>Founder & Planner</h6><br />
                        <FontAwesomeIcon className='ico' icon={faInstagram} />
                        <FontAwesomeIcon className='ico' icon={faWhatsapp} />
                        <FontAwesomeIcon className='ico' icon={faFacebook} />
                        <FontAwesomeIcon className='ico' icon={faTelegram} />
                    </div>
                    <div className="col-md-3">
                        <img src="https://websitedemos.net/wedding-planner-04/wp-content/uploads/sites/147/2019/11/team-2.jpg" alt="" className="img-fluid" height='450px' width='100%'/>
                        <h3>Mithra</h3><br />
                        <h6>Business Head</h6><br />
                        <FontAwesomeIcon className='ico' icon={faInstagram} />
                        <FontAwesomeIcon className='ico' icon={faWhatsapp} />
                        <FontAwesomeIcon className='ico' icon={faFacebook} />
                        <FontAwesomeIcon className='ico' icon={faTelegram} />
                    </div>
                    <div className="col-md-3">
                        <img src="https://websitedemos.net/wedding-planner-04/wp-content/uploads/sites/147/2019/11/team-4.jpg" alt="" className="img-fluid" height='450px' width='100%'/>
                        <h3>Priya</h3><br />
                        <h6>Business Head</h6><br />
                        <FontAwesomeIcon className='ico' icon={faInstagram} />
                        <FontAwesomeIcon className='ico' icon={faWhatsapp} />
                        <FontAwesomeIcon className='ico' icon={faFacebook} />
                        <FontAwesomeIcon className='ico' icon={faTelegram} />
                    </div>
                </div>
            </div>
            
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

export default About;
