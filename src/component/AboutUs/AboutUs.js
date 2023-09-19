import React from 'react'

const AboutUs = () => {
    return (
        <>
            <div className="page-content bg-white">
                {/* <!-- Banner  --> */}
                <div className="dz-bnr-inr style-1 text-center bg-parallax bg-parallax">
                    <div className="container">
                        <div className="dz-bnr-inr-entry">
                            <h1>About Us</h1>
                            {/* <!-- Breadcrumb Row --> */}
                            <nav aria-label="breadcrumb" className="breadcrumb-row">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">About Us</li>
                                </ul>
                            </nav>
                            {/* <!-- Breadcrumb Row End --> */}
                        </div>
                    </div>
                </div>
                {/* <!-- Banner End --> */}

                {/* <!-- Visit Restaurant --> */}
                <section className="content-inner pb-0">
                    <div className="container">
                        <div className="section-head text-center">
                            <h2 className="title">We Invite you to Visit Our Restaurant</h2>
                            <p className="about-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="about-media dz-media rounded-md">
                                    <img src="assets/images/background/pic11.jpg" alt="/" />
                                        <a className="video video-btn popup-youtube" href="https://www.youtube.com/watch?v=XJb1G9iRoL4">
                                            <i className="fa-solid fa-play"></i>
                                        </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Visit Restaurant --> */}
                {/* <!-- Service Section --> */}
                <section className="content-inner">
                    <div className="container">
                        <div className="section-head text-center">
                            <h2 className="title">What We Do</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-sm-6 m-b30">
                                <div className="icon-bx-wraper style-3">
                                    <div className="icon-bx">
                                        <div className="icon-cell">
                                            <i className="flaticon-vegetable"></i>
                                        </div>
                                    </div>
                                    <div className="icon-content">
                                        <h5 className="title"><a href="service-detail.html">Fresh Products</a></h5>
                                        <p>Lorem Ipsum is simply dummy text of the printing and </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 m-b30">
                                <div className="icon-bx-wraper style-3">
                                    <div className="icon-bx">
                                        <div className="icon-cell">
                                            <i className="flaticon-chef-hat"></i>
                                        </div>
                                    </div>
                                    <div className="icon-content">
                                        <h5 className="title"><a href="service-detail.html">Skilled Chefs</a></h5>
                                        <p>Lorem Ipsum is simply dummy text of the printing and </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 m-b30">
                                <div className="icon-bx-wraper style-3">
                                    <div className="icon-bx">
                                        <div className="icon-cell">
                                            <i className="flaticon-cocktail"></i>
                                        </div>
                                    </div>
                                    <div className="icon-content">
                                        <h5 className="title"><a href="service-detail.html">Best Bar</a></h5>
                                        <p>Lorem Ipsum is simply dummy text of the printing and </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 m-b30">
                                <div className="icon-bx-wraper style-3">
                                    <div className="icon-bx">
                                        <div className="icon-cell">
                                            <i className="flaticon-cuisine"></i>
                                        </div>
                                    </div>
                                    <div className="icon-content">
                                        <h5 className="title"><a href="service-detail.html">Vegan Cuisine</a></h5>
                                        <p>Lorem Ipsum is simply dummy text of the printing and </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Service Section --> */}

            </div>
            {/* <!--Footer--> */}
            <footer className="site-footer style-1 bg-dark" id="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                <div className="widget widget_getintuch">
                                    <h5 className="footer-title">Contact</h5>
                                    <ul>
                                        <li>
                                            <i className="flaticon-placeholder"></i>
                                            <p>1247/Plot No. 39, 15th Phase, Colony, Kkatpally, Hyderabad</p>
                                        </li>
                                        <li>
                                            <i className="flaticon-telephone"></i>
                                            <p>+91 987-654-3210<br /> +91 123-456-7890</p>
                                        </li>
                                        <li>
                                            <i className="flaticon-email-1"></i>
                                            <p>info@example.com<br />
                                                info@example.com</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-2 col-md-6 col-sm-6">
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
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                <div className="widget widget_services">
                                    <h5 className="footer-title">OUR SERVICES</h5>
                                    <ul>
                                        <li><a href="blog-open-gutenberg.html"><span>Strategy & Research</span></a></li>
                                        <li><a href="services.html"><span>Fast Delivery</span></a></li>
                                        <li><a href="contact-us.html"><span>Seat Reservation</span></a></li>
                                        <li><a href="shop-style-1.html"><span>Pickup In Store</span></a></li>
                                        <li><a href="our-menu-1.html"><span>Our Menu</span></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6	">
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
                                <span className="copyright-text">Powered by <a href="https://dexignzone.com/" target="_blank">DexignZone</a></span>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="bg1 dz-move" src="assets/images/background/pic5.png" alt="/" />
                <img className="bg2 dz-move" src="assets/images/background/pic6.png" alt="/" />
            </footer>
            {/* <!-- Footer --> */}

            <div className="scroltop-progress scroltop-primary">
                <svg width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                </svg>
            </div>
        </>
    )
}

export default AboutUs
