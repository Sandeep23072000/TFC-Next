import React from 'react'

const Reservation = () => {
  return (
    <>
      <section className="content-inner-1 section-wrapper-1 bg-parallax"
              // style="background-image:url('../assets/images/background/pic1.png'); background-attachment: fixed;">
              style={{ backgroundImage: 'url("../assets/images/background/pic1.png")', backgroundAttachment: 'fixed' }}>

              <div className="container">
                <div className="section-head text-center">
                  <h2 className="title text-white wow flipInX" data-wow-delay="0.2s">Reservation</h2>
                </div>
                <form action="#">
                  <div className="row">
                    <div className="col-lg-4 col-md-6 m-b30 m-sm-b50 wow fadeInUp" data-wow-delay="0.2s">
                      <div className="input-group input-line">
                        <div className="input-group-prepand">
                          <i className="flaticon-user"></i>
                        </div>
                        <input name="dzName" required type="text" className="form-control"
                          placeholder="Your Name" />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 m-b30 m-sm-b50 wow fadeInUp" data-wow-delay="0.2s">
                      <div className="input-group input-line">
                        <div className="input-group-prepand">
                          <i className="flaticon-phone-call"></i>
                        </div>
                        <input name="dzPhoneNumber" required type="text" className="form-control dz-number"
                          placeholder="Phone Number" />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 m-b30 m-sm-b50 wow fadeInUp" data-wow-delay="0.2s">
                      <div className="input-group input-line">
                        <div className="input-group-prepand">
                          <i className="flaticon-email-1"></i>
                        </div>
                        <input name="dzEmail" required type="text" className="form-control"
                          placeholder="Your Email" />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 m-b30 m-sm-b50 wow fadeInUp" data-wow-delay="0.4s">
                      <div className="input-group input-line">
                        <div className="input-group-prepand">
                          <i className="flaticon-two-people"></i>
                        </div>
                        <select className="form-select default-select">
                          <option>Number Of People</option>
                          <option>Member 1</option>
                          <option>Member 2</option>
                          <option>Member 3</option>
                          <option>Member 4</option>
                          <option>Member 5</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 m-b30 m-sm-b50 wow fadeInUp" data-wow-delay="0.4s">
                      <div className="input-group input-line">
                        <div className="input-group-prepand">
                          <i className="flaticon-calendar-date"></i>
                        </div>
                        <input required type="text" className="form-control" id="datePickerOnly"
                          placeholder="Date" />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 m-b30 m-sm-b50 wow fadeInUp" data-wow-delay="0.4s">
                      <div className="input-group input-line">
                        <div className="input-group-prepand">
                          <i className="flaticon-clock"></i>
                        </div>
                        <input required type="text" className="form-control" id="timePickerOnly"
                          placeholder="Time" />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 text-center">
                      <button type="submit" name="submit" value="submit"
                        className="btn btn-lg btn-white btn-hover-1"><span>Book a Table</span></button>
                    </div>
                  </div>
                </form>
              </div>
            </section>
    </>
  )
}

export default Reservation
