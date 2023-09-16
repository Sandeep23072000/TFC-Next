import React, { useState } from 'react'
import axios from 'axios';

const NewsBlog = () => {
  const [newsBlogData, setNewsBlogData] = useState("");

  React.useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/`)
      .then(response => {
        console.log(response, 'NewsBlogDataaaaaaaaaaaaaaaaaa');
        setNewsBlogData(response?.data?.data)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
    <>
      <section className="content-inner-1 overflow-hidden">
        <div className="container">
          <div className="section-head text-center">
            <h2 className="title wow flipInX" data-wow-delay="0.2s">News & blog</h2>
          </div>
          <div className="swiper blog-swiper swiper-visible swiper-btn-lr">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="dz-card style-1 blog-half overlay-shine dz-img-effect zoom wow fadeInUp"
                  data-wow-delay="0.4s">
                  <div className="dz-media">
                    <a href="blog-standard.html"><img src="../assets/images/blog/grid/pic1.jpg"
                      alt="/" /></a>
                  </div>
                  <div className="dz-info">
                    <div className="dz-meta">
                      <ul>
                        <li><a href="/"><i className="flaticon-calendar-date"></i>
                          26 Jan 2023</a></li>
                        <li className="dz-comment"><a href="/"><i
                          className="flaticon-chat-bubble"></i> 2.5K </a></li>
                      </ul>
                    </div>
                    <h5 className="dz-title"><a href="blog-standard.html">Taste of Paradise Dishes</a>
                    </h5>
                    <p>There are many variations of passages of Lorem Ipsum available, but the
                      majority have.</p>
                    <div className="read-btn">
                      <a href="blog-standard.html" className="btn btn-primary btn-hover-2">Read
                        More</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="dz-card style-1 blog-half overlay-shine dz-img-effect zoom wow fadeInUp"
                  data-wow-delay="0.6s">
                  <div className="dz-media">
                    <a href="blog-standard.html"><img src="../assets/images/blog/grid/pic2.jpg"
                      alt="/" /></a>
                  </div>
                  <div className="dz-info">
                    <div className="dz-meta">
                      <ul>
                        <li><a href="/"><i className="flaticon-calendar-date"></i>
                          15 Mar 2023</a></li>
                        <li className="dz-comment"><a href="/"><i
                          className="flaticon-chat-bubble"></i> 1.5K</a></li>
                      </ul>
                    </div>
                    <h5 className="dz-title"><a href="blog-standard.html">The Spices Route Taste</a>
                    </h5>
                    <p>There are many variations of passages of Lorem Ipsum available, but the
                      majority have.</p>
                    <div className="read-btn">
                      <a href="blog-standard.html" className="btn btn-primary btn-hover-2">Read
                        More</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="dz-card style-1 blog-half wow overlay-shine dz-img-effect zoom fadeInUp"
                  data-wow-delay="0.4s">
                  <div className="dz-media">
                    <a href="blog-standard.html"><img src="../assets/images/blog/grid/pic3.jpg"
                      alt="/" /></a>
                  </div>
                  <div className="dz-info">
                    <div className="dz-meta">
                      <ul>
                        <li><a href="/"><i className="flaticon-calendar-date"></i>
                          20 Sep 2023</a></li>
                        <li className="dz-comment"><a href="/"><i
                          className="flaticon-chat-bubble"></i> 2.0K</a></li>
                      </ul>
                    </div>
                    <h5 className="dz-title"><a href="blog-standard.html">The Fork & Knife</a></h5>
                    <p>There are many variations of passages of Lorem Ipsum available, but the
                      majority have.</p>
                    <div className="read-btn">
                      <a href="blog-standard.html" className="btn btn-primary btn-hover-2">Read
                        More</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="dz-card style-1 blog-half overlay-shine dz-img-effect zoom wow fadeInUp"
                  data-wow-delay="0.6s">
                  <div className="dz-media">
                    <a href="blog-standard.html"><img src="../assets/images/blog/grid/pic4.jpg"
                      alt="/" /></a>
                  </div>
                  <div className="dz-info">
                    <div className="dz-meta">
                      <ul>
                        <li><a href="/"><i className="flaticon-calendar-date"></i>
                          30 Nov 2023</a></li>
                        <li className="dz-comment"><a href="/"><i
                          className="flaticon-chat-bubble"></i> 3.5K </a></li>
                      </ul>
                    </div>
                    <h5 className="dz-title"><a href="blog-standard.html">Flavors Of The World</a></h5>
                    <p>There are many variations of passages of Lorem Ipsum available, but the
                      majority have.</p>
                    <div className="read-btn">
                      <a href="blog-standard.html" className="btn btn-primary btn-hover-2">Read
                        More</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="dz-card style-1 blog-half overlay-shine dz-img-effect zoom wow fadeInUp"
                  data-wow-delay="0.4s">
                  <div className="dz-media">
                    <a href="blog-standard.html"><img src="../assets/images/blog/grid/pic1.jpg"
                      alt="/" /></a>
                  </div>
                  <div className="dz-info">
                    <div className="dz-meta">
                      <ul>
                        <li><a href="/"><i className="flaticon-calendar-date"></i>
                          26 Jan 2023</a></li>
                        <li className="dz-comment"><a href="/"><i
                          className="flaticon-chat-bubble"></i> 2.5K </a></li>
                      </ul>
                    </div>
                    <h5 className="dz-title"><a href="blog-standard.html">Taste of Paradise Dishes</a>
                    </h5>
                    <p>There are many variations of passages of Lorem Ipsum available, but the
                      majority have.</p>
                    <div className="read-btn">
                      <a href="blog-standard.html" className="btn btn-primary btn-hover-2">Read
                        More</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="dz-card style-1 blog-half overlay-shine dz-img-effect zoom wow fadeInUp"
                  data-wow-delay="0.6s">
                  <div className="dz-media">
                    <a href="blog-standard.html"><img src="../assets/images/blog/grid/pic2.jpg"
                      alt="/" /></a>
                  </div>
                  <div className="dz-info">
                    <div className="dz-meta">
                      <ul>
                        <li><a href="/"><i className="flaticon-calendar-date"></i>
                          15 Mar 2023</a></li>
                        <li className="dz-comment"><a href="/"><i
                          className="flaticon-chat-bubble"></i> 1.5K</a></li>
                      </ul>
                    </div>
                    <h5 className="dz-title"><a href="blog-standard.html">The Spices Route Taste</a>
                    </h5>
                    <p>There are many variations of passages of Lorem Ipsum available, but the
                      majority have.</p>
                    <div className="read-btn">
                      <a href="blog-standard.html" className="btn btn-primary btn-hover-2">Read
                        More</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="dz-card style-1 blog-half wow overlay-shine dz-img-effect zoom fadeInUp"
                  data-wow-delay="0.4s">
                  <div className="dz-media">
                    <a href="blog-standard.html"><img src="../assets/images/blog/grid/pic3.jpg"
                      alt="/" /></a>
                  </div>
                  <div className="dz-info">
                    <div className="dz-meta">
                      <ul>
                        <li><a href="/"><i className="flaticon-calendar-date"></i>
                          20 Sep 2023</a></li>
                        <li className="dz-comment"><a href="/"><i
                          className="flaticon-chat-bubble"></i> 2.0K</a></li>
                      </ul>
                    </div>
                    <h5 className="dz-title"><a href="blog-standard.html">The Fork & Knife</a></h5>
                    <p>There are many variations of passages of Lorem Ipsum available, but the
                      majority have.</p>
                    <div className="read-btn">
                      <a href="blog-standard.html" className="btn btn-primary btn-hover-2">Read
                        More</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="dz-card style-1 blog-half overlay-shine dz-img-effect zoom wow fadeInUp"
                  data-wow-delay="0.6s">
                  <div className="dz-media">
                    <a href="blog-standard.html"><img src="../assets/images/blog/grid/pic4.jpg"
                      alt="/" /></a>
                  </div>
                  <div className="dz-info">
                    <div className="dz-meta">
                      <ul>
                        <li><a href="/"><i className="flaticon-calendar-date"></i>
                          30 Nov 2023</a></li>
                        <li className="dz-comment"><a href="/"><i
                          className="flaticon-chat-bubble"></i> 3.5K </a></li>
                      </ul>
                    </div>
                    <h5 className="dz-title"><a href="blog-standard.html">Flavors Of The World</a></h5>
                    <p>There are many variations of passages of Lorem Ipsum available, but the
                      majority have.</p>
                    <div className="read-btn">
                      <a href="blog-standard.html" className="btn btn-primary btn-hover-2">Read
                        More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pagination mt-xl-0 m-t40">
              <div className="blog-button-prev btn-prev-long"><i className="fa-solid fa-arrow-left"></i></div>
              <div className="blog-button-next btn-next-long"><i className="fa-solid fa-arrow-right"></i></div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default NewsBlog
