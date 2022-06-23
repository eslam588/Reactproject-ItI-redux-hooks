import React from 'react'
import "./css/footer.css"
function Footer() {
  return (
    <div>
      <section className="section7 pt-4 text-light bg-light">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6 col-lg-3 article1 ">
                    <h5 className="mb-5">PR-CARE</h5>
                    <h4 className="text-primary fw-bold fst-italic">KIST Hospital Road</h4>
                    <p className="my-2">Phone: +1 5589 55488 55</p>
                    <p className="my-2">Email: prcare@example.com</p>
                    <div className="links">
                        <a href="#" className="bg-primary inline-block"><i className="fa-brands fa-facebook-f text-light"></i></a>
                        <a href="#" className="bg-primary inline-block"><i className="fa-brands fa-twitter text-light"></i></a>
                        <a href="#" className="bg-primary inline-block"><i className="fa-brands fa-google-plus-g text-light"></i></a>
                        <a href="#" className="bg-primary inline-block"><i className="fa-brands fa-linkedin-in text-light"></i></a>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3 article2 ">
                    <h5 className="mb-5">Explore Link</h5>
                        <a href="#"><i className="fa-solid fa-caret-right me-4"></i>Our Services</a>
                        <a href="#"><i className="fa-solid fa-caret-right me-4"></i>Meet Our Team</a>
                        <a href="#"><i className="fa-solid fa-caret-right me-4"></i>Forum</a>
                        <a href="#"><i className="fa-solid fa-caret-right me-4"></i>Help Center</a>
                </div>
                <div className="col-12 col-md-6 col-lg-3 article3">
                    <h5 className="mb-5">Latest Post</h5>
                    <a href="#"><i className="fa-solid fa-caret-right me-4"></i>Our Services</a>
                        <a href="#"><i className="fa-solid fa-caret-right me-4"></i>Meet Our Team</a>
                        <a href="#"><i className="fa-solid fa-caret-right me-4"></i>Forum</a>
                        <a href="#"><i className="fa-solid fa-caret-right me-4"></i>Help Center</a>
                </div>
                <div className="col-12 col-md-6 col-lg-3 article4 ">
                    <h5 className="mb-5">Contact Us</h5>
                    <p><i className="fa-solid fa-location-dot me-3 "></i> 123 New Line, London UK</p>
                    <p><i className="fa-solid fa-envelope me-3"></i> hello@contact-us.com</p>
                    <p><i className="fa-solid fa-mobile-screen-button me-4"></i>+44 00 00 1234<br/>++ 44 00 00 1234</p>
                </div>
            </div>
        </div>
    </section>
    <div class="section8  text-center py-3 text-light">
        <div class="container">
           <h5> © Copyright PR-CARE. All Rights Reserved
             Designed by PraRoz</h5> 
        </div>
    </div>
    </div>
  )
}

export default Footer