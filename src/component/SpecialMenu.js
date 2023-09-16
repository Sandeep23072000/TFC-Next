import React, { useState } from 'react'
import axios from 'axios';

const SpecialMenu = () => {
  const [specialMenuData, setSpecialMenuData] = useState("");

  React.useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/`)
      .then(response => {
        console.log(response, 'TodaysMenuDataaaaaaaaaaaaaaaaaaa');
        setSpecialMenuData(response?.data?.data)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      <section className="content-inner bg-white section-wrapper-2 overflow-hidden">
        <div className="container">
          <div className="section-head text-center">
            <h2 className="title wow flipInX" data-wow-delay="0.2s">Special Menu</h2>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 m-b30 wow fadeInUp" data-wow-delay="0.1s">
              <div className="dz-img-box style-2 box-hover">
                <div className="dz-media">
                  <img src="../assets/images/gallery/small/pic1.jpg" alt="/" />
                </div>
                <div className="dz-content">
                  <h4 className="dz-title"><a href="product-detail.html">Pizza</a></h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing.</p>
                  <h5 className="dz-price text-primary">$55.00</h5>
                  <a href="shop-cart.html" className="btn btn-primary btn-hover-2">Add To Cart</a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 m-b30 wow fadeInUp" data-wow-delay="0.2s">
              <div className="dz-img-box style-2 box-hover active">
                <div className="dz-media">
                  <img src="../assets/images/gallery/small/pic2.jpg" alt="/" />
                </div>
                <div className="dz-content">
                  <h4 className="dz-title"><a href="product-detail.html">Rice</a></h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing.</p>
                  <h5 className="dz-price text-primary">$50.00</h5>
                  <a href="shop-cart.html" className="btn btn-primary btn-hover-2">Add To Cart</a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 m-b30 wow fadeInUp" data-wow-delay="0.3s">
              <div className="dz-img-box style-2 box-hover">
                <div className="dz-media">
                  <img src="../assets/images/gallery/small/pic3.jpg" alt="/" />
                </div>
                <div className="dz-content">
                  <h4 className="dz-title"><a href="product-detail.html">Green Salad</a></h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing.</p>
                  <h5 className="dz-price text-primary">$45.00</h5>
                  <a href="shop-cart.html" className="btn btn-primary btn-hover-2">Add To Cart</a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 m-b30 wow fadeInUp" data-wow-delay="0.4s">
              <div className="dz-img-box style-2 box-hover">
                <div className="dz-media">
                  <img src="../assets/images/gallery/small/pic4.jpg" alt="/" />
                </div>
                <div className="dz-content">
                  <h4 className="dz-title"><a href="product-detail.html">Pasta</a></h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing.</p>
                  <h5 className="dz-price text-primary">$35.0</h5>
                  <a href="shop-cart.html" className="btn btn-primary btn-hover-2">Add To Cart</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className="bg1 dz-move-down" src="../assets/images/background/pic2.png" alt="/" />
        <img className="bg2 dz-parallax" data-parallax-speed="0.05" src="../assets/images/background/pic3.png" alt="/" />
      </section>
    </>
  )
}

export default SpecialMenu
