import React from 'react'
import "./css/footer.css"
import { BsFillCaretRightFill} from "react-icons/bs";
import { ImFacebook, ImTwitter,ImGooglePlus,ImLinkedin2} from "react-icons/im";





function Footer() {

  return (
    /* eslint-disable-next-line jsx-a11y/anchor-is-valid */
    <div>
      <section className="section7 pt-4 mt-5 text-light bg-light">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6 col-lg-3 article1 ">
                    <h5 className="mb-1 fw-bolder fs-2">Eclipc Store</h5>
                    <h4 className="fw-bold fst-italic">KIST Hospital Road</h4>
                    <p className="mb-4">Email: prcare@example.com</p>
                    <div className="links">
                        <a href="javascript:void(0)" className="bg-primary inline-block text-white fs-5"><ImFacebook/></a>
                        <a href="javascript:void(0)" className="bg-primary inline-block text-white fs-5"><ImTwitter/></a>
                        <a href="javascript:void(0)" className="bg-primary inline-block text-white fs-5"><ImGooglePlus/></a>
                        <a href="javascript:void(0)" className="bg-primary inline-block text-white fs-5 "><ImLinkedin2/></a>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3 article2 ">
                    <h5 className="mb-5">Explore Link</h5>
                        <a href="javascript:void(0)"><BsFillCaretRightFill/>Our Services</a>
                        <a href="javascript:void(0)"><BsFillCaretRightFill/>Meet Our Team</a>
                        <a href="javascript:void(0)"><BsFillCaretRightFill/>Forum</a>
                </div>
                <div className="col-12 col-md-6 col-lg-3 article3">
                    <h5 className="mb-5">Latest Post</h5>
                    <a href="javascript:void(0)"><BsFillCaretRightFill/>Our Services</a>
                        <a href="javascript:void(0)"><BsFillCaretRightFill/>Meet Our Team</a>
                        <a href="javascript:void(0)"><BsFillCaretRightFill/>Forum</a>
                </div>
                <div className="col-12 col-md-6 col-lg-3 article4 ">
                    <h5 className="mb-5">Contact Us</h5>
                    <p><i className="fa-solid fa-location-dot me-3 "></i> 123 New Line, London UK</p>
                    <p><i className="fa-solid fa-envelope me-3"></i> hello@contact-us.com</p>
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