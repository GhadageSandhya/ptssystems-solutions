import React, { useState } from 'react';
import springlogo from '../../src/Images/img61.jpg';
import headerimg from '../../src/Images/header image.PNG';
import img62 from '../../src/Images/img62.jpg';
import Servicecard from '../../src/CARDJSON/servicecard.json';
function Navbar() {
    const [mvBtn, setmvBtn] = useState('')

    return (
        <>
            <div className="nav-body">
                <div className="nav-body-white">
                    <div className="nav-img-style">
                        <nav className="navbar navbar-expand-lg ">
                            <div className="container-fluid">
                                <img src={springlogo} width={"100px"} alt="springlogo" />
                                <button className="navbar-toggler " style={{ background: "transparent" }} type="button"
                                    data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto  mb-lg-0 ">
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="#">HOME</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">ABOUT</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">PAGES</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">SERVICES</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">RESURCH</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">BLOG</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">CONTACT</a>
                                        </li>
                                    </ul>
                                    <form className="d-flex" role="search">
                                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                        <button className="btn " type="submit">Appointments!</button>
                                    </form>
                                </div>
                            </div>
                        </nav>

                        {/* bg-text */}

                        <div className="nav-text ">
                            <div className="nav-img-style">
                                <img src={headerimg} width={"100%"} height={"420px"} alt="headerimg" />
                            </div>
                            <div className="head">
                                <h2 style={{ color: "rgb(74, 202, 211)" }} >Lorem ipsum  <br />
                                    Lorem
                                    <span style={{ color: 'yellow' }}>{`${'ipsum Lorem'}`}</span></h2>
                                <p id="pass-Nav-text">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum <br /> Lorem ipsum Lorem ipsum</p>
                                <button type="button" className="btn btn-primary" onClick={() => alert('Read More')}>Read More.</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container-fluid " style={{ padding: "0px" }}>
                <div className="bio-dream">
                    <div className="row">
                        <div className="col-md-6  ">
                            <div className="img-bg-color ">
                                <div className="img-dreamBio">
                                    <img src={img62} width={"110%"} height={"280px"} alt="img62" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mis-vis">
                                <h3>THE SPRING BIO ULTIMATE DREAM</h3>
                                <div>
                                    <h5>Mission Statement</h5>
                                    <p>At Spring Bio our mission is to provide a flexible tailored
                                        one-stop solution for all our client’s needs for innovator samples.
                                        On the supplier end, it is to provide them with, a reliable partner,
                                        an extended marketing team and communicate intelligence
                                        about their sales opportunities.</p>
                                </div>
                                <div>
                                    <h5>Vision Statement</h5>
                                    <p>Spring Bio will be recognized as a great client solution company
                                        worldwide, who never stops trying to do better in providing
                                        innovator samples and associated activities.
                                    </p>
                                </div>
                                <button className="dream-misvisBtn" onClick={() => mvBtn(alert('Know More'))}>KNOW MORE.</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div >
                <div className="row main-services">
                    <div className="col-md-4 head">
                        <h2>Our Services</h2>
                    </div>
                    <div className="col-md-8 para">
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                            nostrud exerci tation </p>
                    </div>
                </div>
                <div className="services-body">
                    <div className="row services-cards" >
                        {Servicecard.map((value, index) => {
                            return (

                                <div className="col-md-4 card1" key={value.id}>
                                    <div className="card-items">
                                        <h5>{value.ser_head}</h5>
                                        <p>{value.ser_para}</p>
                                    </div>
                                </div>

                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar