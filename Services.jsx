import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp, faFacebook, faTwitter, faTelegram } from '@fortawesome/free-brands-svg-icons';
import Card from 'react-bootstrap/Card';

function Services() {
    return (
        <div>
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img className='name img-fluid' src='https://media.istockphoto.com/id/1190043570/photo/happy-wedding-photography-of-bride-and-groom-at-wedding-ceremony-wedding-tradition-sprinkled.jpg?s=612x612&w=0&k=20&c=_aCIW5-iOIiaDdqin_50kvBcbFbIxSULHHamPUILE0c=' alt="Wedding" />
                        <Carousel.Caption className="logal">
                            <img src="https://websitedemos.net/wedding-planner-04/wp-content/uploads/sites/147/2017/11/pic10-free-img.png" alt="" height='144px' width='230px' />
                            <h3>Facilisis Fugit Blanditiis Corrupti</h3>
                            <h1>Services</h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div><br /><br />
            <div className="container">
                <div className="row">
                    <div id="ser" className="col-md-4">
                        <h2>Serving The <br /> Best</h2><br />
                        <p>Earum sequi mollis similique eleifend, adipisci. Ante consequat nisl accumsan. Taciti tincidunt <br />erat aute hic penatibus!<br />
                            Earum sequi mollis similique eleifend, adipisci. Ante consequat nisl accumsan.</p>
                        <button>Start Planning</button>
                    </div>
                    <div className="col-md-4">
                        <img id='mani img-fluid' src="https://websitedemos.net/wedding-planner-04/wp-content/uploads/sites/147/2017/12/pic39-free-img.jpg" alt="" height='210px' width='100%' /><br /><br />
                        <img id='mithra img-fluid' src="https://websitedemos.net/wedding-planner-04/wp-content/uploads/sites/147/2017/12/pic40-free-img.jpg" alt="" height='210px' width='100%' />
                    </div>
                    <div className="col-md-4">
                        <img className="img-fluid'" src="https://websitedemos.net/wedding-planner-04/wp-content/uploads/sites/147/2017/12/pic42-free-img.jpg" alt="" height='450px' width='100%' />
                    </div>
                </div>
            </div><br /><br />
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <Card>
                            <Card.Body>
                                <Card.Text>
                                    <img className="cad" src="https://websitedemos.net/wedding-planner-04/wp-content/uploads/sites/147/2021/03/icon-3.png" alt="" /><br /><br />
                                    <h3 className="tata">Photography</h3><br />
                                    <p className="pro">Neque curabitur montes dolores ipsam tenetur erat dictum provident.</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-3">
                        <Card>
                            <Card.Body>
                                <Card.Text>
                                    <img className="cad" src="https://websitedemos.net/wedding-planner-04/wp-content/uploads/sites/147/2021/03/icon-11.png" alt="" /><br /><br />
                                    <h3  className="tata">Catering</h3><br />
                                    <p className="pro">Neque curabitur montes dolores ipsam tenetur erat dictum provident.</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-3">
                        <Card>
                            <Card.Body>
                                <Card.Text>
                                    <img className="cad" src="https://websitedemos.net/wedding-planner-04/wp-content/uploads/sites/147/2021/03/icon-12.png" alt="" /><br /><br />
                                    <h3 className="tata">Cocktails</h3><br />
                                    <p className="pro">Neque curabitur montes dolores ipsam tenetur erat dictum provident.</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-3">
                        <Card>
                            <Card.Body>
                                <Card.Text>
                                    <img className="cad" src="https://websitedemos.net/wedding-planner-04/wp-content/uploads/sites/147/2021/03/icon-13.png" alt="" /><br /><br />
                                    <h3 className="tata">Bridal Makeup</h3><br />
                                    <p className="pro">Neque curabitur montes dolores ipsam tenetur erat dictum provident.</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div><br />
            <div className="local">
                <Carousel>
                    <Carousel.Item>
                        <img className='name img-fluid' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa25eILYYGyi-ElvtNXjIo3CLQ-9y2EiZenw&s' alt="Wedding image" />
                        <Carousel.Caption className="logal">
                            <h1 className="logs" >Want Your Wedding To Be Perfect And Memorable?</h1>
                            <p  className="logs">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            <a href='/Login'><button id='butn'>Start Wedding Planning</button></a>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div><br />
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
    )
}

export default Services;
