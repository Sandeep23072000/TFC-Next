import React, { useState } from 'react'
import axios from 'axios';

const NewsBlog = () => {
  const [newsBlogData, setNewsBlogData] = useState("");

  React.useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/post`)
      .then(response => {
        console.log(response, 'NewsBlogDataaaaaaaaaaaaaaaaaa');
        setNewsBlogData(response?.data?.data)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  function truncateText(text, maxLength) {
    if (text && text.length > maxLength) {
      return text.slice(0, maxLength).trim() + '...';
    }
    return text;
  }
  return (
    <>
      <section className="content-inner-1 overflow-hidden">
        <div className="container">
          <div className="section-head text-center">
            <h2 className="title wow flipInX" data-wow-delay="0.2s">News & blog</h2>
          </div>
          <div className="swiper blog-swiper swiper-visible swiper-btn-lr">
            <div className="swiper-wrapper">
              {
                newsBlogData ? (
                  newsBlogData?.map((item, i) => {
                    return (
                      <div className="swiper-slide" key={i}>
                        <div className="dz-card style-1 blog-half overlay-shine dz-img-effect zoom wow fadeInUp"
                          data-wow-delay="0.4s">
                          <div className="dz-media">
                            <a href="blog-standard.html"><img src={item?.feature_image}
                              alt="/" /></a>
                          </div>
                          <div className="dz-info">
                            <div className="dz-meta">
                              <ul>
                                <li><a href="/"><i className="flaticon-calendar-date"></i>
                                  {item?.published_date}</a></li>
                                <li className="dz-comment"><a href="/"><i
                                  className="flaticon-chat-bubble"></i>{item?.like}</a></li>
                              </ul>
                            </div>
                            <h5 className="dz-title"><a href="blog-standard.html">{item?.title}</a>
                            </h5>
                            <p dangerouslySetInnerHTML={{__html:item?.content}}></p>
                            <div className="read-btn">
                              <a href="blog-standard.html" className="btn btn-primary btn-hover-2">Read
                                More</a>
                            </div>
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
