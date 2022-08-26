import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <div className="header">
        <img
          src="https://www.licious.in/img/rebranding/licious-logo.svg"
          alt="logo"
        />
      </div>
      <div className="useFullLink mt-3 d-flex">
        <div className="d-flex gap-4">
          <div className="d-flex flex-column">
            <h3 className="usefullLinkHeading">USEFUL LINKS</h3>
            <Link className="useLink" to="">
              Why Licious?
            </Link>
            <Link className="useLink" to="">
              Refer & Earn
            </Link>
            <Link className="useLink" to="">
              Licious Cash & Cash+
            </Link>
            <Link className="useLink" to="">
              Careers
            </Link>
            <Link className="useLink" to="">
              BLOG
            </Link>
            <Link className="useLink" to="">
              Campaign
            </Link>
            <Link className="useLink" to="">
              Bug Bounty Guidelines
            </Link>
            <Link className="useLink" to="">
              About Us
            </Link>
            <Link className="useLink" to="">
              FSSC 22000 Certification
            </Link>
            <Link className="useLink" to="">
              FSSAI Licenses
            </Link>
            <Link className="useLink" to="">
              Sitemap
            </Link>
          </div>
          <div>
            <h3 className="applicationHeading">
              EXPERIENCE LICIOUS APP ON MOBILE
            </h3>
            <div className="d-flex gap-1">
              <img
                width="122px"
                src="https://www.licious.in/img/rebranding/app-store-new.svg"
                alt="App Store"
              />
              <img
                width="122px"
                src="https://www.licious.in/img/rebranding/play-store-new.png"
                alt="Play Store"
              />
            </div>
          </div>
        </div>
        <div className="d-flex gap-1 px-5">
          <div>
            <div>
              <h3 className="footerHeading">CONTACT US</h3>
              <p className="footerPara">Call: 1800-4190-786</p>
              <p className="footerPara">Talktous@licious.com</p>
            </div>
            <div>
              <h3 className="footerHeading">REGISTERED OFFICE ADDRESS:</h3>
              <p className="footerPara w-50">
                House of Licious, Zed Pearl, No 12, Domlur Layout Bangalore,
                Karnataka - 560071
              </p>
            </div>
          </div>
          <div>
            <div className="d-flex flex-column">
              <Link className="useLink" to="">
                T&C
              </Link>
              <Link className="useLink" to="">
                FAQ
              </Link>
              <Link className="useLink" to="">
                Privacy Policy
              </Link>
            </div>
            <div>
              <h3 className="footerHeading">HAVE SECURITY CONCERN?</h3>
              <p className="footerPara">Mail us to: security@licious.com</p>
            </div>
          </div>
          <div>
            <img
              width="120px"
              src="https://www.licious.in/img/rebranding/3-dsecure.png"
              alt="visa"
            />
          </div>
        </div>
      </div>
      <div className="mt-2">
        <h3 className="citiesHeading">Cities we serve</h3>
        <div className='citiesLinks'>
          <Link className="linksWithBorder" to="">
            Bengaluru
          </Link>
          <Link className="linksWithBorder" to="">
            NCR
          </Link>
          <Link className="linksWithBorder" to="">
            Hyderabad
          </Link>
          <Link className="linksWithBorder" to="">
            Chandigarh
          </Link>
          <Link className="linksWithBorder" to="">
            Panchkula
          </Link>
          <Link className="linksWithBorder" to="">
            Mohali
          </Link>
          <Link className="linksWithBorder" to="">
            Mumbai
          </Link>
          <Link className="linksWithBorder" to="">
            Pune
          </Link>
          <Link className="linksWithBorder" to="">
            Chennai
          </Link>
          <Link className="linksWithBorder" to="">
            Coimbatore
          </Link>
          <Link className="linksWithBorder" to="">
            Jaipur
          </Link>
          <Link className="linksWithBorder" to="">
            Cochin
          </Link>
          <Link className="linksWithBorder" to="">
            Vijayawada
          </Link>
          <Link className="linksWithBorder" to="">
            Visakhapatnam
          </Link>
          <Link className="linksWithBorder" to="">
            Pondicherry
          </Link>
          <Link className="linksWithBorder" to="">
            Kolkata
          </Link>
          <Link className="linksWithBorder" to="">
            Trichy
          </Link>
          <Link className="linksWithBorder" to="">
            Lucknow
          </Link>
          <Link className="linksWithBorder" to="">
            Kanpur
          </Link>
          <Link className="linksWithBorder" to="">
            Agra
          </Link>
          <Link className="linksWithBorder" to="">
            Thrissur
          </Link>
          <Link className="linksWithBorder" to="">
            Nagpur
          </Link>
          <Link className="linksWithBorder" to="">
            Bhilai
          </Link>
          <Link className="linksWithBorder" to="">
            Nashik
          </Link>
          <Link className="linksWithBorder" to="">
            Palakkad
          </Link>
        </div>
      </div>
      <hr />
      <div className='popularSearch'>
        <h3 className='popularSearchHeading'>popular Searches</h3>
      </div>
    </div>
  );
}

export default Footer