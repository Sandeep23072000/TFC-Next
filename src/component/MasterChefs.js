import React, { useState } from 'react'
import axios from 'axios';

const MasterChefs = () => {
  const [masterChefsData, setMasterChefsData] = useState("");

  React.useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/team`)
      .then(response => {
        console.log(response, 'MasterChefsDataaaaaaaaaaaaaaaaa');
        setMasterChefsData(response?.data?.data)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      <section className="content-inner-1 overflow-hidden bg-light">
        <div className="container">
          <div className="section-head text-center">
            <h2 className="title wow flipInX" data-wow-delay="0.2s">Master Chefs</h2>
          </div>
        </div>
        <div className="container">
          <div className="swiper team-swiper swiper-visible swiper-btn-lr">
            <div className="swiper-wrapper">
              {
                masterChefsData ? (
                  masterChefsData?.map((item,i) =>{
                    return(
                    <div className="swiper-slide" key={i}>
                      <div className="dz-team style-1 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="dz-media">
                          <img src={item?.image} />
                        </div>
                        <div className="dz-content">
                          <div className="clearfix">
                            <h6 className="dz-name"><a href="team-detail.html">{item?.name}</a></h6>
                            <span className="dz-position">{item?.designation}</span>
                          </div>
                          <ul className="team-social">
                            <li>
                              <a className="share-btn" href="/"><i
                                className="flaticon-share"></i></a>
                              <ul className="sub-team-social">
                                <li><a className="fb-btn" href="https://www.facebook.com/"
                                  target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a className="tw-btn" href="https://twitter.com/" target="_blank"><i
                                  className="fab fa-twitter"></i></a></li>
                                <li><a className="in-btn" href="https://www.instagram.com/"
                                  target="_blank"><i className="fab fa-instagram"></i></a></li>
                                <li><a className="lin-btn" href="https://www.linkedin.com/"
                                  target="_blank"><i className="fa-brands fa-linkedin-in"></i></a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    )
                  })
                ) : (
                  null
                )
              }
            </div>
            <div className="pagination mt-xl-0 m-t40">
              <div className="team-button-prev btn-prev-long"><i className="fa-solid fa-arrow-left"></i></div>
              <div className="team-button-next btn-next-long"><i className="fa-solid fa-arrow-right"></i></div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default MasterChefs
