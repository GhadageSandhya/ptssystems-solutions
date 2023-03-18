import React from 'react';
import img61 from '../../src/Images/img61.jpg';
import headerimage from '../../src/Images/header image.PNG';
import map from '../../src/Images/map.PNG';
import img66 from '../../src/Images/img66.jpg';
import testimonial1 from '../../src/Images/testimonial1.PNG';
import testimonial2 from '../../src/Images/testimonial2.PNG';
import testimonial3 from '../../src/Images/testminial3.PNG';
import post1 from '../../src/Images/post1.PNG';
import post2 from '../../src/Images/post2.PNG';
import post3 from '../../src/Images/post3.PNG';
import graytab from '../../src/Images/gray-tab.PNG';
function HomePage() {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col">
            <h3 className='globalpresence'>Global Presence</h3>
            <div className="lorempara">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum distinctio excepturi, ut quidem doloribus, accusantium similique voluptate natus porro dolore eius sit nulla. Quasi, possimus iste vero quae veniam dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum distinctio excepturi, ut quidem doloribus, accusantium similique voluptate natus porro dolore eius sit nulla. Quasi, possimus iste vero quae veniam dolores. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, officiis!. Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className="text-center">
              <img className="img-fluid" src={map} alt="map" />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        {/* <img className="img-fluid" src={img66} alt="img66"/> */}
        <div className="skyblue">
          <div className="row">

            <div className="col-md-6">
              <img className="img-fluid w-60 my-5" src={img66} alt="img66" />
            </div>

            <div className="col-md-6">

              <div>
                <h3 className='buildmentalpeace'>We help to build Mental<br />
                  Peace & prepare better you!</h3>
              </div>

              <div>
                <p className='loremtabletpara'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                  sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
                  enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
                  nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in
                  hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat
                  nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit
                  praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi</p>
              </div>

              <div className="row">
                <div className="col-md-1">
                  <img src={graytab} alt="graytab" height={'100px'} />
                </div>
                <div className="col-md-2">
                  <p className='graytabletloremfirst'>Lorem ipsum</p>
                </div>

                <div className="col-md-1">
                  <span className='pipesymbol'></span>
                </div>

                <div className="col-md-1">
                  <img src={graytab} alt="graytab" height={'100px'} />
                </div>
                <div className="col-md-1">
                  <p className='graytabletloremfirst'>Lorem ipsum</p>
                </div>
              </div>

              <div>
                <button type='submit' className='btn btn-warning' id='tabletappointmentsbtn'><span style={{ 'color': 'white' }}>Appointments!</span></button>
              </div>
            </div>

          </div>
        </div>
      </div>


      <div className="yellowbg">
        <div className="container">
          <h3 className='testimonialclients'>Testimonial Clients</h3>
          <div className="row">
            {/* Robert Westorn */}
            <div className="col-lg-3 mb-3">
              <div className="card">
                <div className="d-flex p-3 justify-content-start align-items-center">
                  <img src={testimonial1} alt="testimonial1" className='mr-4' />
                  <div className="name-job-review">
                    <p className="font-weight-bold mb-0">Robert Westorn</p>
                    <p className="text-muted mb-0">Patient at Lancaster</p>
                  </div>
                </div>

                <div className="card-body">
                  <p className="mb-0">I have suggested and Zenistaa recommended to all my friends and colleagues and I believe that they are amazing job.</p>
                </div>

                {/* <ul className='list-inline text-center m-0'>
                  <li className="list-inline-item"><i className="bi bi-star"></i></li>
                  <li className="list-inline-item"><i className="fa fa-star"></i></li>
                  <li className="list-inline-item"><i className="bi bi-star"></i></li>
                  <li className="list-inline-item"><i className="bi bi-star"></i></li>
                  <li className="list-inline-item"><i className="bi bi-star"></i></li>
                  <li className="list-inline-item"><i className="bi bi-star-half"></i></li>
                </ul> */}

                <span className='fas fa-star'></span>

              </div>
            </div>

            {/* Elianna Edward */}
            <div className="col-lg-3 mb-3">
              <div className="card">
                <div className="d-flex p-3 justify-content-start align-items-center">
                  <img src={testimonial2} alt="testimonial2" className='mr-4' />
                  <div className="name-job-review">
                    <p className="font-weight-bold mb-0">Elianna Edward</p>
                    <p className="text-muted mb-0">CEO of Business</p>
                  </div>
                </div>

                <div className="card-body">
                  <p className="mb-0">Gradually by particing and bringing some changes. I'm observing things I found a new me. Now, I can express myself. </p>
                </div>

                <ul className='list-inline text-center m-0'>
                  <li className="list-inline-item"><i className="bi bi-star"></i></li>
                  <li className="list-inline-item"><i className="bi bi-star"></i></li>
                  <li className="list-inline-item"><i className="bi bi-star"></i></li>
                  <li className="list-inline-item"><i className="bi bi-star"></i></li>
                  <li className="list-inline-item"><i className="bi bi-star-half"></i></li>
                </ul>

              </div>
            </div>

            {/* Damien Cristian */}
            <div className="col-lg-3 mb-3">
              <div className="card">
                <div className="d-flex p-3 justify-content-start align-items-center">
                  <img src={testimonial3} alt="testimonial1" className='mr-4' />
                  <div className="name-job-review">
                    <p className="font-weight-bold mb-0">Damien Cristian</p>
                    <p className="text-muted mb-0">Client, Philadelphia</p>
                  </div>
                </div>

                <div className="card-body">
                  <p className="mb-0">I was having descipline problems with my children. they help me develope & implement an effective descipline strategy.</p>
                </div>

                <ul className='list-inline text-center m-0'>
                  <li className="list-inline-item"><i className="bi bi-star"></i></li>
                  <li className="list-inline-item"><i className="bi bi-star"></i></li>
                  <li className="list-inline-item"><i className="bi bi-star"></i></li>
                  <li className="list-inline-item"><i className="bi bi-star"></i></li>
                  <li className="list-inline-item"><i className="bi bi-star-half"></i></li>
                </ul>

              </div>
            </div>


          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <h3 className="ourlatestnews">Our Latest News & Articles!</h3>
          <div className="col col-md-4 col-sm-12">

            {/* card 1st */}
            <div className="card" style={{ "width": "25rem" }}>
              <img src={post1} className="card-img-top" alt="post1" />
              <div className="card-body">
                <p className="card-title">Hypnotheraphy  |  John Doe</p>
                <p className="card-text">Stop Using the Term Depression Casually, please!</p>
                <hr />
                <p className='readmore'>READ MORE</p>
              </div>
            </div>
          </div>
          {/* card 2nd */}
          <div className="col col-md-4 col-sm-12">
            <div className="card" style={{ "width": "25rem" }}>
              <img src={post2} className="card-img-top" alt="post2" />
              <div className="card-body">
                <p className="card-title">Stress Release | John Doe</p>
                <p className="card-text">5 Fun Activities To Improve your Mental Health.</p>
                <hr />
                <p className='readmore'>READ MORE</p>
              </div>
            </div>
          </div>
          {/* card 3rd */}
          <div className="col col-md-4 col-sm-12">
            <div className="card" style={{ "width": "25rem" }}>
              <img src={post3} className="card-img-top" alt="post3" />
              <div className="card-body">
                <p className="card-title">Phobias & Anxiety | John Doe</p>
                <p className="card-text">The Most Fasicnating Experience To Sadness.</p>
                <hr />
                <p className='readmore'>READ MORE</p>
              </div>
            </div>
          </div>

          <div className="perfectsolutions">
            <span>Perfect Solutions That Business Demands.<span className='skycolortxt'> Finds Your Solutions </span></span>
          </div>

        </div>
      </div>


    </>
  )
}

export default HomePage