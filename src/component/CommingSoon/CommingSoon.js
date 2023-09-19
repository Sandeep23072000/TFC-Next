import React, { useState } from 'react'
const dayjs = require('dayjs');
// import Lottie from 'lottie-react';
// import animationData from '../../../public/assets/json/coming-soon.json';
import axios from 'axios';

const CommingSoon = () => {
    const currentYear = dayjs().format('YYYY');
    const [sendReqFormData, setSendReqFormData] = useState({ email: "" });
    const [emailError, setEmailError] = useState("");

    const handleSendReqFormData = (event) => {
        setEmailError("")
        setSendReqFormData({ email: event.target.value });
        console.log(sendReqFormData);
    };

    const sendReqFormDataSubmit = async (event) => {
        event.preventDefault();
        let error = false;
        if (!sendReqFormData?.email) {
            setEmailError("Email is required");
            error = true;
        } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(sendReqFormData?.email))) {
            setEmailError("Enter a valid email address");
            error = true;
        }
        if (emailError || error) return;

        await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/comming-soon/`, sendReqFormData)
            .then(response => {
                console.log(response, 'reservationnnnnnnnnnnnnnnnnnnnnnnn')
                setSendReqFormData({ email: "" })
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };
    return (
        <>
            {/* <div id="loading-area" className="loading-page-3">
                <img src="assets/images/loading.gif" alt="" />
            </div> */}
            <div className="page-wraper">
                <div className="page-content bg-white">
                    <div className="coming-wrapper overflow-hidden">
                        <div className="container">
                            <img className="bg-img dz-move" src="assets/images/background/pic17.png" alt="/" />
                            <div className="row">
                                <div className="col-lg-8 m-auto">
                                    <div className="inner-content text-center w-100">
                                        <div className="logo-header">
                                            <a href="#" className="logo anim-logo"><img src="assets/images/logo_2.png" alt="/" /></a>
                                        </div>
                                        <h3 className="coming-head">WE ARE COMING SOON!</h3>
                                        <p className="coming-para">Stay tuned for something amazing</p>
                                        {/* <Lottie loop={true}
                                            autoplay={true} animationData={animationData}
                                        /> */}
                                        <img src="assets/images/comming-soon.jpg" alt="/" style={{opacity:"0.7"}} />
                                    </div>
                                    <div className="middle-content">
                                        <h5 className="font-weight-400 m-b20">Subscribe to our mailing list to get latest updates</h5>
                                        <form className="dzSubscribe m-b15" action="">
                                            <div className="dzSubscribeMsg text-white"></div>
                                            <div className="input-group">
                                                <input name="email" type="email" className="form-control bg-grey" value={sendReqFormData?.email} onChange={(e) => handleSendReqFormData(e)} placeholder="Enter Your Email" required />
                                                <div className="input-group-addon">
                                                    <button name="submit" value="submit" type="submit" className="btn btn-primary btn-hover-2" onClick={sendReqFormDataSubmit}>
                                                        <span>Send Request</span><i className="fa-solid fa-paper-plane"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            {
                                                emailError ? (
                                                    <p className='text-danger'>*{emailError}</p>
                                                ) : (
                                                    null
                                                )
                                            }
                                        </form>
                                        {/* <div className="dz-social-icon text-center">
                                            <ul>
                                                <li><a target="_blank" className="text-dark" href="https://www.facebook.com/">
                                                    <i className="fab fa-facebook-f"></i>
                                                </a></li>
                                                <li><a target="_blank" className="text-dark" href="https://twitter.com/">
                                                    <i className="fab fa-twitter"></i>
                                                </a></li>
                                                <li><a target="_blank" className="text-dark" href="https://www.youtube.com/">
                                                    <i className="fa-brands fa-youtube"></i>
                                                </a></li>
                                                <li><a target="_blank" className="text-dark" href="https://www.instagram.com/">
                                                    <i className="fab fa-instagram"></i>
                                                </a></li>
                                                <li><a target="_blank" className="text-dark" href="https://www.linkedin.com/">
                                                    <i className="fa-brands fa-linkedin-in"></i>
                                                </a></li>
                                            </ul>
                                        </div> */}
                                    </div>
                                    <div className="coming-footer text-center">
                                        <p>© Copyrights Traditional Food Company | {currentYear} All Rights Reserved</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CommingSoon
