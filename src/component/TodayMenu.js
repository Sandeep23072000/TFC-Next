import React, { useState } from 'react'
import axios from 'axios';

const TodayMenu = () => {
  const [todaysMenuData, setTodaysMenuData] = useState("");
  const [qualityServiceData, setQualityServiceData] = useState("");

  React.useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/`)
      .then(response => {
        console.log(response, 'TodaysMenuDataaaaaaaaaaaaaaaaaaa');
        setTodaysMenuData(response?.data?.data)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  React.useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/service`)
      .then(response => {
        console.log(response, 'QualityServiceDataDataaaaaaaaaaaaaaaaaaa');
        setQualityServiceData(response?.data?.data)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      <section className="content-inner-1 section-wrapper-3 overflow-hidden">
        <div className="container">
          <div className="section-head text-center">
            <h2 className="title wow flipInX" data-wow-delay="0.2s">Today's Menu</h2>
          </div>
          <div className="row inner-section-wrapper">
            <div className="col-lg-3 col-md-6 col-sm-6 m-b30 wow fadeInUp" data-wow-delay="0.2s">
              <div className="dz-img-box style-3 box-hover">
                <div className="dz-media">
                  <img src="../assets/images/gallery/grid2/pic2.jpg" alt="/" />
                </div>
                <span className="dz-tag">TOP SELLER</span>
                <div className="dz-content">
                  <h5 className="dz-title"><a href="our-menu-1.html">Pasta</a></h5>
                  <p>Lorem ipsum dolor sit amet, dipiscing elit, sed</p>
                </div>
                <div className="dz-hover-content">
                  <div className="dz-info">
                    <h5 className="dz-title mb-0"><a href="our-menu-1.html">Pasta</a></h5>
                    <span className="dz-price">$35.00</span>
                  </div>
                  <a href="shop-cart.html" className="btn btn-cart btn-white text-primary btn-square"><i
                    className="flaticon-shopping-cart"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 m-b30 wow fadeInUp" data-wow-delay="0.4s">
              <div className="dz-img-box style-3 box-hover">
                <div className="dz-media">
                  <img src="../assets/images/gallery/grid2/pic5.jpg" alt="/" />
                </div>
                <span className="dz-tag">TOP SELLER</span>
                <div className="dz-content">
                  <h5 className="dz-title"><a href="our-menu-1.html">Oreo Shake</a></h5>
                  <p>Lorem ipsum dolor sit amet, dipiscing elit, sed</p>
                </div>
                <div className="dz-hover-content">
                  <div className="dz-info">
                    <h5 className="dz-title mb-0"><a href="our-menu-1.html">Shake</a></h5>
                    <span className="dz-price">$55.00</span>
                  </div>
                  <a href="shop-cart.html" className="btn btn-cart btn-white text-primary btn-square"><i
                    className="flaticon-shopping-cart"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 m-b30 wow fadeInUp" data-wow-delay="0.6s">
              <div className="dz-img-box style-3 box-hover">
                <div className="dz-media">
                  <img src="../assets/images/gallery/grid2/pic4.jpg" alt="/" />
                </div>
                <span className="dz-tag">TOP SELLER</span>
                <div className="dz-content">
                  <h5 className="dz-title"><a href="our-menu-1.html">Dal Fry</a></h5>
                  <p>Lorem ipsum dolor sit amet, dipiscing elit, sed</p>
                </div>
                <div className="dz-hover-content">
                  <div className="dz-info">
                    <h5 className="dz-title mb-0"><a href="our-menu-1.html">Dal</a></h5>
                    <span className="dz-price">$25.00</span>
                  </div>
                  <a href="shop-cart.html" className="btn btn-cart btn-white text-primary btn-square"><i
                    className="flaticon-shopping-cart"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 m-b30 wow fadeInUp" data-wow-delay="0.8s">
              <div className="dz-img-box style-3 box-hover">
                <div className="dz-media">
                  <img src="../assets/images/gallery/grid2/pic6.jpg" alt="/" />
                </div>
                <span className="dz-tag">TOP SELLER</span>
                <div className="dz-content">
                  <h5 className="dz-title"><a href="our-menu-1.html">Pizza</a></h5>
                  <p>Lorem ipsum dolor sit amet, dipiscing elit, sed</p>
                </div>
                <div className="dz-hover-content">
                  <div className="dz-info">
                    <h5 className="dz-title mb-0"><a href="our-menu-1.html">Pizza</a></h5>
                    <span className="dz-price">$90.00</span>
                  </div>
                  <a href="shop-cart.html" className="btn btn-cart btn-white text-primary btn-square"><i
                    className="flaticon-shopping-cart"></i></a>
                </div>
              </div>
            </div>
            <div className="col-12 text-center m-t10">
              <a href="our-menu-2.html" className="btn btn-md btn-primary btn-hover-1"><span>See All
                Dishes</span></a>
            </div>
          </div>
          <div className="section-head text-center">
            <h2 className="title wow flipInX" data-wow-delay="0.2s">Quality Services</h2>
          </div>
          {/* <!-- Icon Wrapper 1 --> */}
          <div className="icon-wrapper1">
            <div className="row wow fadeInUp" data-wow-delay="0.2s">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="icon-bx-wraper style-1 box-hover center"
                  style={{ backgroundImage: 'url("../assets/images/gallery/grid/pic1.jpg")' }}>
                  <div className="inner-content">
                    <div className="icon-bx m-b25">
                      <span className="icon-cell icon-md">
                        <i className="flaticon-restaurant"></i>
                      </span>
                    </div>
                    <div className="icon-content">
                      <h5 className="dz-title">Restaurant</h5>
                      <p>Lorem ipsum dolor sit amet, dipiscing elit, sed</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="icon-bx-wraper style-1 box-hover center"
                  style={{ backgroundImage: 'url("../assets/images/gallery/grid/pic2.jpg")' }}>
                  <div className="inner-content">
                    <div className="icon-bx m-b25">
                      <span className="icon-cell icon-md">
                        <i className="flaticon-martini"></i>
                      </span>
                    </div>
                    <div className="icon-content">
                      <h5 className="dz-title">Bar</h5>
                      <p>Lorem ipsum dolor sit amet, dipiscing elit, sed</p>
                    </div>
                  </div>
                </div>

              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="icon-bx-wraper style-1 box-hover center"
                  // style="background-image: url(../assets/images/gallery/grid/pic3.jpg)">
                  // style={{backgroundImage: url(../assets/images/gallery/grid/pic3.jpg)}}>
                  style={{ backgroundImage: 'url("../assets/images/gallery/grid/pic3.jpg")' }}>
                  <div className="inner-content">
                    <div className="icon-bx m-b25">
                      <span className="icon-cell icon-md">
                        <i className="flaticon-coffee-cup"></i>
                      </span>
                    </div>
                    <div className="icon-content">
                      <h5 className="dz-title">Cafe</h5>
                      <p>Lorem ipsum dolor sit amet, dipiscing elit, sed</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="icon-bx-wraper style-1 box-hover center"
                  // style="background-image: url(../assets/images/gallery/grid/pic4.jpg)">
                  // style={{backgroundImage: url(../assets/images/gallery/grid/pic4.jpg)}}>
                  style={{ backgroundImage: 'url("../assets/images/gallery/grid/pic4.jpg")' }}>
                  <div className="inner-content">
                    <div className="m-b25">
                      <span className="icon-cell icon-md">
                        <i className="flaticon-cake"></i>
                      </span>
                    </div>
                    <div className="icon-content">
                      <h5 className="dz-title">Dessert</h5>
                      <p>Lorem ipsum dolor sit amet, dipiscing elit, sed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Icon Wrapper 1 --> */}
        </div>
        <img className="bg1 dz-parallax" data-parallax-speed="0.05" src="../assets/images/background/pic3.png" alt="/" />
        <img className="bg2 dz-parallax" data-parallax-speed="0.05" src="../assets/images/background/pic4.png" alt="/" />
      </section>
    </>
  )
}

export default TodayMenu
