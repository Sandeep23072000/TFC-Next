import React, { useState } from 'react'
import axios from 'axios'

const Footer = () => {
  const [contactUsFormData, setContactUsFormData] = useState("");

  const handleContactUsFormData = (event) => {
    setContactUsFormData({ ...contactUsFormData, [event.target.name]: event.target.value });
    console.log(contactUsFormData, 'contactusssssssssssssssssss');
  };

  const contactUsFormSubmit = async (event) => {
    event.preventDefault();
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/contact-us/`, contactUsFormData)
      .then(response => {
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <>
      <footer className="site-footer  style-1 bg-dark" id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-xl-5 col-lg-5 col-md-12 wow fadeInUp" data-wow-delay="0.4s">
                <div className="dz-form-card bg-primary">
                  <div className="section-head">
                    <h4 className="title m-0">Contact us</h4>
                    <p className="m-t10">Lorem Ipsum is simply dummy text of the printing and typesetting
                      industry.</p>
                  </div>
                  <form className="dzForm dezPlaceAni" onSubmit={contactUsFormSubmit}>
                    {/* <input type="hidden" className="form-control" name="dzToDo" value="Contact" />
                        <input type="hidden" className="form-control" name="reCaptchaEnable" value="0" /> */}
                    <div className="dzFormMsg"></div>
                    <div className="row">
                      <div className="col-lg-12 col-md-12">
                        <div className="input-group input-line">
                          <input name="name" required type="text" className="form-control" onChange={(e) => handleContactUsFormData(e)}
                            placeholder="Your Name" />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="input-group input-line">
                          <input name="email" required type="email" className="form-control" onChange={(e) => handleContactUsFormData(e)}
                            placeholder="Email Address" />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="input-group input-line">
                          <input name="subject" required type="text" className="form-control" onChange={(e) => handleContactUsFormData(e)}
                            placeholder="Subject" />
                        </div>
                      </div>
                      <div className="col-sm-12 ">
                        <div className="input-group input-line">
                          <textarea name="message" required className="form-control" onChange={(e) => handleContactUsFormData(e)}
                            placeholder="Message"></textarea>
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <button type="submit" onClick={contactUsFormSubmit}
                          className="btn btn-md btn-white btn-hover-1"><span>Send
                            Message</span></button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-5 wow fadeInUp" data-wow-delay="0.5s">
                <div className="widget widget_getintuch">
                  <h5 className="footer-title">Contact</h5>
                  <ul>
                    <li>
                      <i className="flaticon-placeholder"></i>
                      <p>1247/Plot No. 39, 15th Phase, Colony, Kkatpally, Hyderabad</p>
                    </li>
                    <li>
                      <i className="flaticon-telephone"></i>
                      <p>+91 987-654-3210<br />
                        +91 123-456-7890</p>
                    </li>
                    <li>
                      <i className="flaticon-email-1"></i>
                      <p>info@example.com<br />
                        info@example.com</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-3 col-6 wow fadeInUp" data-wow-delay="0.6s">
                <div className="widget widget_services">
                  <h5 className="footer-title">Our Links</h5>
                  <ul>
                    <li><a href="index.html"><span>Home</span></a></li>
                    <li><a href="about-us.html"><span>About Us</span></a></li>
                    <li><a href="services.html"><span>Services</span></a></li>
                    <li><a href="team.html"><span>Team</span></a></li>
                    <li><a href="blog-standard.html"><span>Blog</span></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-3 col-6 wow fadeInUp" data-wow-delay="0.7s">
                <div className="widget widget_services">
                  <h5 className="footer-title">Help Center</h5>
                  <ul>
                    <li><a href="faq.html"><span>FAQ</span></a></li>
                    <li><a href="shop-style-1.html"><span>Shop</span></a></li>
                    <li><a href="shop-style-2.html"><span>Category Filter</span></a></li>
                    <li><a href="testimonial.html"><span>Testimonials</span></a></li>
                    <li><a href="contact-us.html"><span>Contact Us</span></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Footer Bottom Part --> */}
        <div className="container">
          <div className="footer-bottom">
            <div className="row">
              <div className="col-xl-6 col-md-6 text-md-start">
                <p>Copyright 2023 All rights reserved.</p>
              </div>
              <div className="col-xl-6 col-md-6 text-md-end">
                <span className="copyright-text">Powered by <a href="https://dexignzone.com/"
                  target="_blank">DexignZone</a></span>
              </div>
            </div>
          </div>
        </div>
        <img className="bg1 dz-move" src="../assets/images/background/pic5.png" alt="/" />
        <img className="bg2 dz-move" src="../assets/images/background/pic6.png" alt="/" />
      </footer>
    </>
  )
}

export default Footer
