import React, { useRef } from 'react';
import "./Contact.css"
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_5euldxo', 'template_25uew8c', e.target, 'user_dNnM6x5GE5SdCAHReKiBT')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };


    return (
        <>
        <section id="contact" className="paralax-mf footer-paralax contact-bg sect-mt4 route">
            <div className="overlay-mf"></div>
            <div className="container">
                <div className="row">
                <div className="col-sm-12">
                    <div className="contact-mf">
                    <div id="contact" className="box-shadow-full">
                        <div className="row">
                        <div className="col-md-6">
                            <div className="title-box-2">
                            <h5 className="title-left">
                                Send Message 
                            </h5>
                            </div>
                            <div>
                            <form ref={form}  onSubmit={sendEmail} method="post" role="form" className="php-email-form">
                                <div className="row">
                                <div className="col-md-12 mb-3">
                                    <div className="form-group">
                                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
                                    </div>
                                </div>
                                <div className="col-md-12 mb-3">
                                    <div className="form-group">
                                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
                                    </div>
                                </div>
                                <div className="col-md-12 mb-3">
                                    <div className="form-group">
                                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                    <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                                    </div>
                                </div>
                                <div className="col-md-12 text-center mt-5">
                                    <button type="submit" className="button button-a button-big button-rouded">Send Message</button>
                                </div>
                                </div>
                            </form>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="title-box-2 pt-4 pt-md-0">
                            <h5 className="title-left">
                                Get in Touch
                            </h5>
                            </div>
                            <div className="more-info">
                            <p className="lead">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolorum dolorem soluta quidem
                                expedita aperiam aliquid at.
                                Totam magni ipsum suscipit amet? Autem nemo esse laboriosam ratione nobis
                                mollitia inventore?
                            </p>
                            <ul className="list-ico">
                                <li><i class="fas fa-map-marker-alt"></i> David company para, Gaibandha, 5700</li>
                                <li><i class="fas fa-mobile"></i> (617) 557-0089</li>
                                <li><i class="fas fa-envelope"></i> mollah@example.com</li>
                            </ul>
                            </div>
                            <div className="socials-link">
                            <ul>
                                <li><a href="https://www.facebook.com/tashdid.diganta/" target="_thapa"><span className="ico-circle"><i class="fab fa-facebook"></i></span></a></li>
                                <li><a href="" target="_thapa"><span className="ico-circle"><i className="fab fa-instagram"></i></span></a></li>
                                <li><a href="https://twitter.com/TashditD" target="_thapa"><span className="ico-circle"><i className="fab fa-twitter"></i></span></a></li>
                                <li><a href="https://www.linkedin.com/in/mollah-masuk-helal-6977b0228/" target="_thapa"><span className="ico-circle"><i className="fab fa-linkedin"></i></span></a></li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
        </>
    );
};

export default Contact;