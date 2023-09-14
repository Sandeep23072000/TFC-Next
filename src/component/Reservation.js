import React, {useState} from 'react'
import axios from 'axios';
const Reservation = () => {
  const [reservationFormData, setReservationFormData] = useState("");

  const handleReservationForm = (event) => {
    setReservationFormData({ ...reservationFormData, [event.target.name]: event.target.value });
    console.log(reservationFormData);
  };

  const reservationFormSubmit = async (event) => {
    event.preventDefault();
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/reservation/`, reservationFormData)
      .then(response => {
        console.log(response,'reservationnnnnnnnnnnnnnnnnnnnnnnn');
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };
  return (
    <>
      <section className="content-inner-1 section-wrapper-1 bg-parallax"
        style={{ backgroundImage: 'url("../assets/images/background/pic1.png")', backgroundAttachment: 'fixed' }}>

        <div className="container">
          <div className="section-head text-center">
            <h2 className="title text-white wow flipInX" data-wow-delay="0.2s">Reservation</h2>
          </div>
          <form onSubmit={reservationFormSubmit}>
            <div className="row">
              <div className="col-lg-4 col-md-6 m-b30 m-sm-b50 wow fadeInUp" data-wow-delay="0.2s">
                <div className="input-group input-line">
                  <div className="input-group-prepand">
                    <i className="flaticon-user"></i>
                  </div>
                  <input required type="text" className="form-control" name="name" onChange={(e) => handleReservationForm(e)}
                    placeholder="Your Name" />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 m-b30 m-sm-b50 wow fadeInUp" data-wow-delay="0.2s">
                <div className="input-group input-line">
                  <div className="input-group-prepand">
                    <i className="flaticon-phone-call"></i>
                  </div>
                  <input required type="text" className="form-control dz-number" name="phone"
                    placeholder="Phone Number" />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 m-b30 m-sm-b50 wow fadeInUp" data-wow-delay="0.2s">
                <div className="input-group input-line">
                  <div className="input-group-prepand">
                    <i className="flaticon-email-1"></i>
                  </div>
                  <input required type="text" className="form-control" name="email" onChange={(e) => handleReservationForm(e)}
                    placeholder="Your Email" />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 m-b30 m-sm-b50 wow fadeInUp" data-wow-delay="0.4s">
                <div className="input-group input-line">
                  <div className="input-group-prepand">
                    <i className="flaticon-two-people"></i>
                  </div>
                  <input required type="number" className="form-control" name="people" onChange={(e) => handleReservationForm(e)}
                    placeholder="Number Of People" />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 m-b30 m-sm-b50 wow fadeInUp" data-wow-delay="0.4s">
                <div className="input-group input-line">
                  <div className="input-group-prepand">
                    <i className="flaticon-calendar-date"></i>
                  </div>
                  <input required type="text" className="form-control" name='date' onChange={(e) => handleReservationForm(e)}
                    placeholder="Date" />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 m-b30 m-sm-b50 wow fadeInUp" data-wow-delay="0.4s">
                <div className="input-group input-line">
                  <div className="input-group-prepand">
                    <i className="flaticon-clock"></i>
                  </div>
                  <input required type="text" className="form-control" name="time" onChange={(e) => handleReservationForm(e)}
                    placeholder="Time" />
                </div>
              </div>
              <div className="col-lg-12 col-md-12 text-center">
                <button type="submit"
                  className="btn btn-lg btn-white btn-hover-1" onSubmit={reservationFormSubmit}><span>Book a Table</span></button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default Reservation
