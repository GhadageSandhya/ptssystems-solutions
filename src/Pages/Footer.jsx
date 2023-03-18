import React from 'react';
import footerlogo from '../../src/Images/footer-logo.PNG';
import isologo from '../../src/Images/iso-logo.PNG';
function Footer() {
    return (
        <footer>
            <div className="footerbg">
                <div>
                    <h2 className="fillouttxt">Fill out for Contact</h2>
                </div>

                <div>
                    <p className='fillinthecontact'>Fill-in the contact form and get immediate assistance from <br />our medical consultance</p>
                </div>

                <div className="container">
                    <form>
                        <div className="row">
                            <div className="col-md-6 ">
                                <div className="mb-3">
                                    <input type="text" className="form-control" width={'25px'} defaultValue={'Your Name:'} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <input type="text" className="form-control" defaultValue={'Your Email:'} />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div>
                                    <textarea className="form-control" rows={4} defaultValue={"Your Message:"} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div>
                                    <button type="submit" className="btn btn-warning">SEND</button><br />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                {/* complete form section here! */}

                <div className="container">
                    <div className="row">

                        <div className="col col-lg-3 col-sm-12">
                            <div>
                                <h5 className='footercontent'>About Us</h5>
                            </div>

                            <div className='inaboutusfirstpara'>
                                There are many variations of passages Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aliquid ratione ducimus.
                            </div>

                            <div className='inaboutusphone'>
                                Phone: +123 456 7890
                            </div>

                            <div className='inaboutusemail'>
                                Mail Id: info@example.com
                            </div>

                            <div className="copyright">
                                <p>Copyright &copy; 2022 All rights reserved.</p>
                            </div>
                        </div>

                        <div className="col col-lg-2 col-sm-12">
                            <div>
                                <h5 className='footercontent'>Useful Links</h5>
                            </div>
                            <div className='usefullinkscontent'>
                                <p>About Us</p>
                                <p>Our Solutions</p>
                                <p>Employers</p>
                                <p>Work Job</p>
                                <p>Industries</p>
                                <p>Contact US</p>
                            </div>
                        </div>

                        <div className="col col-lg-1 col-sm-12">
                            <div>
                                <h5 className='footercontent'> </h5>
                                <div className='thirdcol'>
                                    <p>-Programs</p>
                                    <p>-Testimonial</p>
                                    <p>-How it's</p>
                                    <p>-Seekers</p>
                                    <p>-Leadership</p>
                                </div>
                                <div className='footerspringimgbg'>
                                    <img src={footerlogo} alt="footerlogo" height={'70px'} width={'120px'} />
                                </div>
                            </div>
                        </div>

                        <div className="col col-lg-3 col-sm-12">
                            <div>
                                <h5 className='footercontent'>Latest Twist</h5>
                            </div>
                            <p className='footerfourthcolfirst'>1 Day For More 50% Off Sale. Modern Trends And Tendencies Build Websites With US ...To get upto 50% off, click...</p>
                            <a href="#" className='footerfourthcolsec'>twitter.com/i/web/status/15070...</a>
                            <p className='footerfourthcolthird'>March 24,2022 4:30pm</p>

                            <img className='footerisoimgbg' src={isologo} alt="isologo" height={'75px'} />
                        </div>

                        <div className="col col-lg-3 col-sm-12">
                            <div>
                                <h5 className='footercontent'>Our Time Schedule</h5>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <div className="footerlastcolfirst">
                                        <p>Mon to Wed</p>
                                        <p>Tue to Fri</p>
                                        <p>Saturday</p>
                                        <p>Sunday</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="footerlastcolsec">
                                        <p>10:00am to 2:30pm</p>
                                        <p>11:00am to 4:30pm</p>
                                        <p>10:00am to 1:00pm</p>
                                        <p>Closed</p>
                                    </div>
                                </div>

                                <div >
                                    <p className="aboutusservicesprivacy">About Us | Services | Privacy</p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                {/* Complete the coloumn section here! */}
            </div>
        </footer>
    )
}

export default Footer