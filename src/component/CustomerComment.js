import React, {useState} from 'react'
import axios from 'axios';
const CustomerComment = () => {
  const [commentData, setCommentData] = useState("");

  React.useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/testimonial`)
      .then(response => {
        setCommentData(response?.data?.data)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
    <>
      <section className="content-inner-1 section-wrapper-2 right overflow-hidden">
        <div className="container">
          <div className="section-head text-center">
            <h2 className="title wow flipInX" data-wow-delay="0.2s">Customer's Comment</h2>
          </div>
          <div className="row gx-0 wow fadeInUp" data-wow-delay="0.4s">
            <div className="col-lg-7 col-md-12">
              <div className="swiper testimonial-one-thumb">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <img src="../assets/images/testimonial/small/pic1.jpg" alt="/" />
                  </div>
                  <div className="swiper-slide">
                    <img src="../assets/images/testimonial/small/pic2.jpg" alt="/" />
                  </div>
                  <div className="swiper-slide">
                    <img src="../assets/images/testimonial/small/pic3.jpg" alt="/" />
                  </div>
                  <div className="swiper-slide">
                    <img src="../assets/images/testimonial/small/pic4.jpg" alt="/" />
                  </div>
                  <div className="swiper-slide">
                    <img src="../assets/images/testimonial/small/pic5.jpg" alt="/" />
                  </div>
                  <div className="swiper-slide">
                    <img src="../assets/images/testimonial/small/pic6.jpg" alt="/" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
              <div className="swiper testimonial-one-swiper h-100">
                <div className="swiper-wrapper">
                  {
                    commentData ? (
                      commentData?.map((item, i) => {
                        return (
                          <div className="swiper-slide" key={i}>
                            <div className="testimonial-1">
                              <div className="testimonial-text">
                                <p>{item?.description}</p>
                              </div>
                              <div className="testimonial-info">
                                <h5 className="testimonial-name">{item?.name}</h5>
                                <span className="testimonial-position">{item?.designation}</span>
                              </div>
                              <i className="flaticon-right-quote quote"></i>
                            </div>
                          </div>
                        )
                      })
                    ) : (
                      null
                    )
                  }
                  {/* <div className="swiper-slide">
                          <div className="testimonial-1">
                            <div className="testimonial-text">
                              <p>There are many variations of passages of Lorem Ipsum available, but
                                the majority have suffered alteration in some form, by injected
                                humour, or randomised words which don't look even slightly
                                believable. If you are going to use a passage of Lorem Ipsum, you
                                need to be sure there isn't anything embarrassing hidden in the
                                middle of text.</p>
                            </div>
                            <div className="testimonial-info">
                              <h5 className="testimonial-name">John Doe</h5>
                              <span className="testimonial-position">Food Expert</span>
                            </div>
                            <i className="flaticon-right-quote quote"></i>
                          </div>
                        </div> */}
                  {/* <div className="swiper-slide">
                          <div className="testimonial-1">
                            <div className="testimonial-text">
                              <p>There are many variations of passages of Lorem Ipsum available, but
                                the majority have suffered alteration in some form, by injected
                                humour, or randomised words which don't look even slightly
                                believable. If you are going to use a passage of Lorem Ipsum, you
                                need to be sure there isn't anything embarrassing hidden in the
                                middle of text.</p>
                            </div>
                            <div className="testimonial-info">
                              <h5 className="testimonial-name">Jolly Roy</h5>
                              <span className="testimonial-position">Food Tester</span>
                            </div>
                            <i className="flaticon-right-quote quote"></i>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="testimonial-1">
                            <div className="testimonial-text">
                              <p>There are many variations of passages of Lorem Ipsum available, but
                                the majority have suffered alteration in some form, by injected
                                humour, or randomised words which don't look even slightly
                                believable. If you are going to use a passage of Lorem Ipsum, you
                                need to be sure there isn't anything embarrassing hidden in the
                                middle of text.</p>
                            </div>
                            <div className="testimonial-info">
                              <h5 className="testimonial-name">Thomas Hed</h5>
                              <span className="testimonial-position">Food Expert</span>
                            </div>
                            <i className="flaticon-right-quote quote"></i>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="testimonial-1">
                            <div className="testimonial-text">
                              <p>There are many variations of passages of Lorem Ipsum available, but
                                the majority have suffered alteration in some form, by injected
                                humour, or randomised words which don't look even slightly
                                believable. If you are going to use a passage of Lorem Ipsum, you
                                need to be sure there isn't anything embarrassing hidden in the
                                middle of text.</p>
                            </div>
                            <div className="testimonial-info">
                              <h5 className="testimonial-name">Kally Mint</h5>
                              <span className="testimonial-position">Food Expert</span>
                            </div>
                            <i className="flaticon-right-quote quote"></i>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="testimonial-1">
                            <div className="testimonial-text">
                              <p>There are many variations of passages of Lorem Ipsum available, but
                                the majority have suffered alteration in some form, by injected
                                humour, or randomised words which don't look even slightly
                                believable. If you are going to use a passage of Lorem Ipsum, you
                                need to be sure there isn't anything embarrassing hidden in the
                                middle of text.</p>
                            </div>
                            <div className="testimonial-info">
                              <h5 className="testimonial-name">Ronny joy</h5>
                              <span className="testimonial-position">Assistant</span>
                            </div>
                            <i className="flaticon-right-quote quote"></i>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="testimonial-1">
                            <div className="testimonial-text">
                              <p>There are many variations of passages of Lorem Ipsum available, but
                                the majority have suffered alteration in some form, by injected
                                humour, or randomised words which don't look even slightly
                                believable. If you are going to use a passage of Lorem Ipsum, you
                                need to be sure there isn't anything embarrassing hidden in the
                                middle of text.</p>
                            </div>
                            <div className="testimonial-info">
                              <h5 className="testimonial-name">Dolly kom</h5>
                              <span className="testimonial-position">Food Expert</span>
                            </div>
                            <i className="flaticon-right-quote quote"></i>
                          </div>
                        </div> */}
                </div>
              </div>
            </div>
          </div>

        </div>
        <img className="bg1 dz-move-down" src="../assets/images/background/pic2.png" alt="/" />
      </section>
    </>
  )
}

export default CustomerComment
