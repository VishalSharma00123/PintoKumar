import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h1>Recourse Inc.</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio alias impedit tempore nulla vero nobis tempora quis dolorem quo, inventore deleniti voluptatem animi, perspiciatis blanditiis autem voluptate praesentium ea. Veniam?</p>
        </div>
      

        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4" style={{paddingTop:"20px"}}>
         
          <h6 class="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="#!" class="text-reset">Angular</a>
          </p>
          <p>
            <a href="#!" class="text-reset">React</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Vue</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Laravel</a>
          </p>
        </div>


        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4"  style={{paddingTop:"20px"}}>
          
          <h6 class="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" class="text-reset">Home</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Services</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Projects</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Help</a>
          </p>
        </div>

        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4"  style={{paddingTop:"20px"}}>
          
          <h6 class="text-uppercase fw-bold mb-4">
            Contact Us
          </h6>
          <p>
            <a href="#!" class="text-reset">Bengaluru,India</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Recourse@gmail.com</a>
          </p>
          <p>
            <a href="#!" class="text-reset">+91 700555555</a>
          </p>
          <p>
            <a href="#!" class="text-reset">+01 4445556667</a>
          </p>
        </div>
        

       
      

      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Recourse Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
