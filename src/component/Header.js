import React from 'react'

const Header = () => {
    return (
        <>
            <header className="site-header mo-left header header-transparent style-1">
                {/* <!-- Main Header --> */}
                <div className="sticky-header main-bar-wraper navbar-expand-lg">
                    <div className="main-bar clearfix ">
                        <div className="container clearfix">

                            {/* <!-- Website Logo --> */}
                            <div className="logo-header mostion">
                                <a href="/" className="anim-logo"><img src="../assets/images/logo.png" alt="/" /></a>
                            </div>

                            {/* <!-- Nav Toggle Button --> */}
                            <button className="navbar-toggler collapsed navicon justify-content-end" type="button"
                                data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>

                            {/* <!-- EXTRA NAV --> */}
                            <div className="extra-nav">
                                <div className="extra-cell">
                                    <ul>
                                        <li>
                                            <a className="btn btn-white btn-square btn-shadow" data-bs-toggle="offcanvas"
                                                href="#offcanvasLogin" role="button" aria-controls="offcanvasLogin">
                                                <i className="flaticon-user"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <button type="button" className="btn btn-white btn-square btn-shadow cart-btn">
                                                <i className="flaticon-shopping-bag-1"></i>
                                                <span className="badge">6</span>
                                            </button>
                                            <ul className="dropdown-menu cart-list">
                                                <li className="cart-item">
                                                    <div className="media">
                                                        <div className="media-left">
                                                            <a href="product-detail.html">
                                                                <img alt="/" className="media-object"
                                                                    src="../assets/images/shop/pic2.jpg" />
                                                            </a>
                                                        </div>
                                                        <div className="media-body">
                                                            <h6 className="dz-title"><a href="product-detail.html"
                                                                className="media-heading">Double Burger</a></h6>
                                                            <span className="dz-price">$28.00</span>
                                                            <span className="item-close">&times;</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="cart-item">
                                                    <div className="media">
                                                        <div className="media-left">
                                                            <a href="product-detail.html">
                                                                <img alt="/" className="media-object"
                                                                    src="../assets/images/shop/pic3.jpg" />
                                                            </a>
                                                        </div>
                                                        <div className="media-body">
                                                            <h6 className="dz-title"><a href="product-detail.html"
                                                                className="media-heading">Cheese Burger</a></h6>
                                                            <span className="dz-price">$20.00</span>
                                                            <span className="item-close">&times;</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="cart-item">
                                                    <div className="media">
                                                        <div className="media-left">
                                                            <a href="product-detail.html">
                                                                <img alt="/" className="media-object"
                                                                    src="../assets/images/shop/pic4.jpg" />
                                                            </a>
                                                        </div>
                                                        <div className="media-body">
                                                            <h6 className="dz-title"><a href="product-detail.html"
                                                                className="media-heading">Burger</a></h6>
                                                            <span className="dz-price">$15.00</span>
                                                            <span className="item-close">&times;</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="cart-item text-center d-flex justify-content-between">
                                                    <h6 className="text-primary mb-0">Total:</h6>
                                                    <h6 className="text-primary mb-0">$63</h6>
                                                </li>
                                                <li className="text-center d-flex">
                                                    <a href="shop-cart.html"
                                                        className="btn btn-primary me-2 w-100 d-block btn-hover-1"><span>View
                                                            Cart</span></a>
                                                    <a href="our-menu-1.html"
                                                        className="btn btn-outline-primary w-100 d-block btn-hover-1"><span>Menu</span></a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* <!-- EXTRA NAV --> */}

                            {/* <!-- Header Nav --> */}
                            <div className="header-nav navbar-collapse collapse justify-content-end" id="navbarNavDropdown">
                                <div className="logo-header">
                                    <a href="index.html" className="anim-logo"><img src="../assets/images/logo.png" alt="/" /></a>
                                </div>
                                <ul className="nav navbar-nav navbar">
                                    <li className="sub-menu-down"><a href="/">Home</a>
                                        <ul className="sub-menu">
                                            <li><a href="index.html">Home 01</a></li>
                                            <li><a href="index-2.html">Home 02</a></li>
                                            <li><a href="index-3.html">Home 03</a></li>
                                        </ul>
                                    </li>
                                    <li className="has-mega-menu">
                                        <a href="/">Pages</a>
                                        <ul className="mega-menu">
                                            <li><a href="/">Pages</a>
                                                <ul>
                                                    <li><a href="about-us.html">About Us</a></li>
                                                    <li><a href="faq.html">FAQ</a></li>
                                                    <li><a href="team.html">Team</a></li>
                                                    <li><a href="team-detail.html">Team Detail</a></li>
                                                    <li><a href="testimonial.html">Testimonial</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="/">Pages</a>
                                                <ul>
                                                    <li><a href="services.html">Services</a></li>
                                                    <li><a href="service-detail.html">Service Detail</a></li>
                                                    <li><a href="error-404.html">Error 404</a></li>
                                                    <li><a href="coming-soon.html">Coming Soon</a></li>
                                                    <li><a href="under-maintenance.html">Under Maintenance</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="/">Our Menus</a>
                                                <ul>
                                                    <li><a href="our-menu-1.html">Menu Style 1</a></li>
                                                    <li><a href="our-menu-2.html">Menu Style 2</a></li>
                                                    <li><a href="our-menu-3.html">Menu Style 3</a></li>
                                                    <li><a href="our-menu-4.html">Menu Style 4</a></li>
                                                    <li><a href="our-menu-5.html">Menu Style 5</a></li>
                                                </ul>
                                            </li>
                                            <li className="header-adv p-0"><img src="../assets/images/adv-media.jpg" alt="/" /></li>
                                        </ul>
                                    </li>
                                    <li className="sub-menu-down"><a href="/">Shop</a>
                                        <ul className="sub-menu">
                                            <li><a href="shop-style-1.html">Shop Style 1</a></li>
                                            <li><a href="shop-style-2.html">Shop Style 2</a></li>
                                            <li><a href="shop-cart.html">Shop Cart</a></li>
                                            <li><a href="shop-wishlist.html">Shop Wishlist</a></li>
                                            <li><a href="shop-checkout.html">Shop Checkout</a></li>
                                            <li><a href="product-detail.html">Product Detail</a></li>
                                        </ul>
                                    </li>
                                    <li className="has-mega-menu">
                                        <a href="/">Blogs</a>
                                        <ul className="mega-menu">
                                            <li> <a href="/">Blog Grid</a>
                                                <ul>
                                                    <li><a href="blog-grid-2.html">Blog Grid 2</a></li>
                                                    <li><a href="blog-grid-3.html">Blog Grid 3</a></li>
                                                    <li><a href="blog-grid-left-sidebar.html">Blog Grid Left Sidebar</a>
                                                    </li>
                                                    <li><a href="blog-grid-right-sidebar.html">Blog Grid Right Sidebar</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li> <a href="/">Blog List</a>
                                                <ul>
                                                    <li><a href="blog-list.html">Blog List</a></li>
                                                    <li><a href="blog-list-left-sidebar.html">Blog List Left Sidebar</a>
                                                    </li>
                                                    <li><a href="blog-list-right-sidebar.html">Blog List Right Sidebar</a>
                                                    </li>
                                                    <li><a href="blog-both-sidebar.html">Blog Both Sidebar</a></li>
                                                </ul>
                                            </li>
                                            <li> <a href="/">Blog Single</a>
                                                <ul>
                                                    <li><a href="blog-standard.html">Blog Detail</a></li>
                                                    <li><a href="blog-open-gutenberg.html">Blog Open Gutenberg</a></li>
                                                    <li><a href="blog-detail-left-sidebar.html">Blog Details Left
                                                        Sidebar</a></li>
                                                    <li><a href="blog-detail-right-sidebar.html">Blog Details Right
                                                        Sidebar</a></li>
                                                </ul>
                                            </li>
                                            <li> <a href="/">Blog Masonry</a>
                                                <ul>
                                                    <li><a href="blog-grid-3-masonary.html">Blog Grid 3 Masonry</a></li>
                                                    <li><a href="blog-grid-4-masonary.html">Blog Grid 4 Masonry</a></li>
                                                    <li><a href="blog-wide-list-sidebar.html">Blog Wide List Sidebar</a>
                                                    </li>
                                                    <li><a href="blog-wide-grid-sidebar.html">Blog Wide Grid Sidebar</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="contact-us.html">Contact Us</a></li>
                                </ul>
                                <div className="dz-social-icon">
                                    <ul>
                                        <li><a target="_blank" className="fab fa-facebook-f"
                                            href="https://www.facebook.com/"></a></li>
                                        <li><a target="_blank" className="fab fa-twitter" href="https://twitter.com/"></a></li>
                                        <li><a target="_blank" className="fab fa-linkedin-in"
                                            href="https://www.linkedin.com/"></a></li>
                                        <li><a target="_blank" className="fab fa-instagram"
                                            href="https://www.instagram.com/"></a></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </header>

        {/* login tab */}
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasLogin">
            <div className="offcanvas-body">
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              <div className="offcanvas-form">
                <div className="login-head">
                  <h4 className="title">Welcome Back</h4>
                  <p>We’d love have you join our 100% remote network of creatord & freelance.</p>
                  <button name="submit" value="submit" type="submit" className="btn google-btn w-100 d-block">
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_1381_2836)">
                        <path
                          d="M5.76215 15.7122L4.85713 19.0908L1.54929 19.1607C0.560727 17.3272 0 15.2294 0 13.0001C0 10.8443 0.524266 8.81147 1.45356 7.02148H1.45427L4.39918 7.56139L5.68923 10.4886C5.41922 11.2758 5.27206 12.1208 5.27206 13.0001C5.27216 13.9543 5.44502 14.8687 5.76215 15.7122Z"
                          fill="#FBBB00" />
                        <path
                          d="M25.7722 10.5715C25.9215 11.3579 25.9994 12.1701 25.9994 13.0001C25.9994 13.9308 25.9015 14.8387 25.7151 15.7144C25.0823 18.6944 23.4287 21.2965 21.138 23.138L21.1373 23.1373L17.428 22.948L16.903 19.6708C18.423 18.7794 19.6109 17.3844 20.2366 15.7144H13.2852V10.5715H20.338H25.7722Z"
                          fill="#518EF8" />
                        <path
                          d="M21.1374 23.1371L21.1381 23.1378C18.9103 24.9285 16.0802 26 12.9995 26C8.04883 26 3.74456 23.2329 1.54883 19.1607L5.76169 15.7122C6.85953 18.6421 9.68596 20.7279 12.9995 20.7279C14.4238 20.7279 15.7581 20.3428 16.9031 19.6707L21.1374 23.1371Z"
                          fill="#28B446" />
                        <path
                          d="M21.2974 2.99284L17.086 6.44069C15.901 5.69999 14.5003 5.27211 12.9996 5.27211C9.61098 5.27211 6.73168 7.45352 5.68884 10.4886L1.45384 7.02142H1.45312C3.61671 2.85 7.97527 0 12.9996 0C16.1538 0 19.046 1.12359 21.2974 2.99284Z"
                          fill="#F14336" />
                      </g>
                      <defs>
                        <clipPath id="clip0_1382_2836">
                          <rect width="26" height="26" fill="white" />
                        </clipPath>
                      </defs>
                    </svg> Sign Up with Google
                  </button>
                  <h6 className="login-title"><span>OR</span></h6>
                </div>
                <div className="form-group m-b15">
                  <label className="form-label">Email*</label>
                  <div className="input-group">
                    <input name="dzEmail" required type="text" className="form-control"
                      placeholder="Enter Your Email" />
                  </div>
                </div>
                <div className="form-group m-b30">
                  <label className="form-label">Password*</label>
                  <div className="input-group search-input">
                    <input name="password" type="password" className="form-control dz-password"
                      placeholder="Enter a Password" />
                    <div className="show-pass">
                      <svg className="eye-close" xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                        fill="#8ea5c8">
                        <path
                          d="M11 17.188a8.71 8.71 0 0 1-1.576-.147.69.69 0 0 1-.579-.678.7.7 0 0 1 .817-.676 7.33 7.33 0 0 0 1.339.127c4.073 0 7.61-3.566 8.722-4.812a18.51 18.51 0 0 0-2.434-2.274.69.69 0 0 1 .335-1.226.69.69 0 0 1 .268.019c.087.024.169.064.24.12a18.79 18.79 0 0 1 3.036 2.939.69.69 0 0 1 0 .848c-.185.234-4.581 5.763-10.167 5.763zm7.361-13.549a.69.69 0 0 0-.972 0l-2.186 2.186a10.68 10.68 0 0 0-2.606-.864c-.527-.099-1.061-.149-1.597-.149-5.585 0-9.982 5.528-10.166 5.763a.69.69 0 0 0 0 .848c.897 1.09 1.915 2.075 3.033 2.936.529.415 1.083.796 1.66 1.142l-1.888 1.887c-.066.063-.118.139-.154.223a.69.69 0 0 0 .145.757.67.67 0 0 0 .226.15c.085.034.175.052.266.051a.69.69 0 0 0 .265-.056c.084-.036.16-.088.223-.154l13.75-13.75a.69.69 0 0 0 0-.972zm-13.65 9.636A18.51 18.51 0 0 1 2.278 11C3.39 9.754 6.927 6.187 11 6.187a7.31 7.31 0 0 1 1.348.127 8.92 8.92 0 0 1 1.814.55L12.895 8.13c-.661-.437-1.453-.632-2.241-.552a3.44 3.44 0 0 0-2.085.989c-.56.56-.91 1.297-.989 2.085a3.44 3.44 0 0 0 .552 2.241l-1.601 1.604a14.43 14.43 0 0 1-1.82-1.222zm4.432-1.392c-.134-.275-.204-.577-.206-.883a2.07 2.07 0 0 1 .6-1.456 2.12 2.12 0 0 1 2.338-.392l-2.731 2.731z">
                        </path>
                      </svg>
                      <svg className="eye-open" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                        fill="#8ea5c8">
                        <path
                          d="M19.873 9.611c-.179-.244-4.436-5.985-9.873-5.985S.305 9.367.127 9.611a.66.66 0 0 0 0 .778c.178.244 4.436 5.985 9.873 5.985s9.694-5.74 9.873-5.984a.66.66 0 0 0 0-.778zM10 15.055c-4.005 0-7.474-3.81-8.501-5.055C2.525 8.753 5.986 4.945 10 4.945c4.005 0 7.473 3.809 8.501 5.055-1.025 1.247-4.487 5.054-8.501 5.054zm0-9.011A3.96 3.96 0 0 0 6.044 10 3.96 3.96 0 0 0 10 13.956 3.96 3.96 0 0 0 13.956 10 3.96 3.96 0 0 0 10 6.044zm0 6.593A2.64 2.64 0 0 1 7.363 10 2.64 2.64 0 0 1 10 7.363 2.64 2.64 0 0 1 12.637 10 2.64 2.64 0 0 1 10 12.637z">
                        </path>
                      </svg>
                    </div>
                  </div>
                </div>
                <button name="submit" value="submit" type="submit"
                  className="btn btn-primary w-100 d-block btn-hover-2"><span>Sign In</span></button>
                <p className="text-center m-t30">Not registered?
                  <a className="register text-primary font-weight-500" data-bs-toggle="offcanvas"
                    href="#offcanvasRegister" role="button" aria-controls="offcanvasRegister">Register here</a>
                </p>
              </div>
            </div>
          </div>


          {/* register tab */}

          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRegister">
            <div className="offcanvas-body">
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              <div className="offcanvas-form">
                <div className="login-head">
                  <h4 className="title">Join Our Network</h4>
                  <p>We’d love have you join our 100% remote network of creatord & freelance.</p>
                  <button name="submit" value="submit" type="submit" className="btn google-btn w-100 d-block">
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_1383_2836)">
                        <path
                          d="M5.76215 15.7122L4.85713 19.0908L1.54929 19.1607C0.560727 17.3272 0 15.2294 0 13.0001C0 10.8443 0.524266 8.81147 1.45356 7.02148H1.45427L4.39918 7.56139L5.68923 10.4886C5.41922 11.2758 5.27206 12.1208 5.27206 13.0001C5.27216 13.9543 5.44502 14.8687 5.76215 15.7122Z"
                          fill="#FBBB00" />
                        <path
                          d="M25.7722 10.5715C25.9215 11.3579 25.9994 12.1701 25.9994 13.0001C25.9994 13.9308 25.9015 14.8387 25.7151 15.7144C25.0823 18.6944 23.4287 21.2965 21.138 23.138L21.1373 23.1373L17.428 22.948L16.903 19.6708C18.423 18.7794 19.6109 17.3844 20.2366 15.7144H13.2852V10.5715H20.338H25.7722Z"
                          fill="#518EF8" />
                        <path
                          d="M21.1374 23.1371L21.1381 23.1378C18.9103 24.9285 16.0802 26 12.9995 26C8.04883 26 3.74456 23.2329 1.54883 19.1607L5.76169 15.7122C6.85953 18.6421 9.68596 20.7279 12.9995 20.7279C14.4238 20.7279 15.7581 20.3428 16.9031 19.6707L21.1374 23.1371Z"
                          fill="#28B446" />
                        <path
                          d="M21.2974 2.99284L17.086 6.44069C15.901 5.69999 14.5003 5.27211 12.9996 5.27211C9.61098 5.27211 6.73168 7.45352 5.68884 10.4886L1.45384 7.02142H1.45312C3.61671 2.85 7.97527 0 12.9996 0C16.1538 0 19.046 1.12359 21.2974 2.99284Z"
                          fill="#F14336" />
                      </g>
                      <defs>
                        <clipPath id="clip0_138_536">
                          <rect width="26" height="26" fill="white" />
                        </clipPath>
                      </defs>
                    </svg> Sign Up with Google
                  </button>
                  <h6 className="login-title"><span>OR</span></h6>
                </div>
                <div className="form-group m-b15">
                  <label className="form-label">Name*</label>
                  <div className="input-group">
                    <input name="dzName" required type="text" className="form-control"
                      placeholder="Enter Your Name" />
                  </div>
                </div>
                <div className="form-group m-b15">
                  <label className="form-label">Email*</label>
                  <div className="input-group">
                    <input name="dzEmail" required type="text" className="form-control"
                      placeholder="Enter Your Email" />
                  </div>
                </div>
                <div className="form-group m-b30">
                  <label className="form-label">Password*</label>
                  <div className="input-group search-input">
                    <input name="password" type="password" className="form-control dz-password"
                      placeholder="Create a Password" />
                    <div className="show-pass">
                      <svg className="eye-close" xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                        fill="#8ea5c8">
                        <path
                          d="M11 17.188a8.71 8.71 0 0 1-1.576-.147.69.69 0 0 1-.579-.678.7.7 0 0 1 .817-.676 7.33 7.33 0 0 0 1.339.127c4.073 0 7.61-3.566 8.722-4.812a18.51 18.51 0 0 0-2.434-2.274.69.69 0 0 1 .335-1.226.69.69 0 0 1 .268.019c.087.024.169.064.24.12a18.79 18.79 0 0 1 3.036 2.939.69.69 0 0 1 0 .848c-.185.234-4.581 5.763-10.167 5.763zm7.361-13.549a.69.69 0 0 0-.972 0l-2.186 2.186a10.68 10.68 0 0 0-2.606-.864c-.527-.099-1.061-.149-1.597-.149-5.585 0-9.982 5.528-10.166 5.763a.69.69 0 0 0 0 .848c.897 1.09 1.915 2.075 3.033 2.936.529.415 1.083.796 1.66 1.142l-1.888 1.887c-.066.063-.118.139-.154.223a.69.69 0 0 0 .145.757.67.67 0 0 0 .226.15c.085.034.175.052.266.051a.69.69 0 0 0 .265-.056c.084-.036.16-.088.223-.154l13.75-13.75a.69.69 0 0 0 0-.972zm-13.65 9.636A18.51 18.51 0 0 1 2.278 11C3.39 9.754 6.927 6.187 11 6.187a7.31 7.31 0 0 1 1.348.127 8.92 8.92 0 0 1 1.814.55L12.895 8.13c-.661-.437-1.453-.632-2.241-.552a3.44 3.44 0 0 0-2.085.989c-.56.56-.91 1.297-.989 2.085a3.44 3.44 0 0 0 .552 2.241l-1.601 1.604a14.43 14.43 0 0 1-1.82-1.222zm4.432-1.392c-.134-.275-.204-.577-.206-.883a2.07 2.07 0 0 1 .6-1.456 2.12 2.12 0 0 1 2.338-.392l-2.731 2.731z">
                        </path>
                      </svg>
                      <svg className="eye-open" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                        fill="#8ea5c8">
                        <path
                          d="M19.873 9.611c-.179-.244-4.436-5.985-9.873-5.985S.305 9.367.127 9.611a.66.66 0 0 0 0 .778c.178.244 4.436 5.985 9.873 5.985s9.694-5.74 9.873-5.984a.66.66 0 0 0 0-.778zM10 15.055c-4.005 0-7.474-3.81-8.501-5.055C2.525 8.753 5.986 4.945 10 4.945c4.005 0 7.473 3.809 8.501 5.055-1.025 1.247-4.487 5.054-8.501 5.054zm0-9.011A3.96 3.96 0 0 0 6.044 10 3.96 3.96 0 0 0 10 13.956 3.96 3.96 0 0 0 13.956 10 3.96 3.96 0 0 0 10 6.044zm0 6.593A2.64 2.64 0 0 1 7.363 10 2.64 2.64 0 0 1 10 7.363 2.64 2.64 0 0 1 12.637 10 2.64 2.64 0 0 1 10 12.637z">
                        </path>
                      </svg>
                    </div>
                  </div>
                </div>
                <button name="submit" value="submit" type="submit"
                  className="btn btn-primary w-100 d-block btn-hover-2">
                  <span>Sign Up</span>
                </button>
                <p className="text-center m-t30">Already have an account?
                  <a className="text-primary font-weight-500" data-bs-toggle="offcanvas" href="#offcanvasLogin"
                    role="button" aria-controls="offcanvasLogin">Login</a>
                </p>
              </div>
            </div>
          </div>
        </>
    )
}

export default Header
