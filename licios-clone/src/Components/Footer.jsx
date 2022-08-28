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
        <div className="innerUseFullLink d-flex gap-4">
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
        <div className="contactAndPaymentImgSection d-flex gap-1 px-5">
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
      <div className="citiesSection mt-2">
        <h3 className="citiesHeading">Cities we serve</h3>
        <div className="citiesLinks">
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
      <div className="popularSearch mt-2">
        <h3 className="popularSearchHeading">popular Searches</h3>
        <h3 className="exoticMeatSection">EXOTIC MEATS</h3>
        <div className="popularSearchLinksSection">
          <Link className="linksWithBorder" to="">
            Duck - Whole
          </Link>
          <Link className="linksWithBorder" to="">
            Rabbit - Curry Cut
          </Link>
          <Link className="linksWithBorder" to="">
            Japanese Quail
          </Link>
        </div>
      </div>
      <hr />
      <div className="spreadSection mt-2">
        <h3 className="spreadSectionHeading">SPREADS</h3>
        <div>
          <Link className="linksWithBorder" to="">
            Chunky Continental Chicken Spread
          </Link>
          <Link className="linksWithBorder" to="">
            Chunky Butter Chicken Spread
          </Link>
          <Link className="linksWithBorder" to="">
            Chunky Sweet Tamarind Chicken Spread
          </Link>
          <Link className="linksWithBorder" to="">
            Chunky Herby Tomato Chicken Spread
          </Link>
          <Link className="linksWithBorder" to="">
            Chunky Shawarma Chicken Spread
          </Link>
          <Link className="linksWithBorder" to="">
            Chunky Honey-Mustard Chicken Spread
          </Link>
        </div>
      </div>
      <hr />
      <div className="chickenSection mt-2">
        <h3 className="chickenSectionHeading">CHICKEN</h3>
        <div>
          <Link className="linksWithBorder" to="">
            Chicken Curry Cut (Large - 8 to 10 Pieces)
          </Link>
          <Link className="linksWithBorder" to="">
            Chicken Breast - Boneless
          </Link>
          <Link className="linksWithBorder" to="">
            CChicken Drumstick - Skinless
          </Link>
          <Link className="linksWithBorder" to="">
            Tender Spring Chicken Curry Cut
          </Link>
          <Link className="linksWithBorder" to="">
            Chicken Leg (Whole) with Thigh
          </Link>
          <Link className="linksWithBorder" to="">
            Chicken Thigh (Boneless)
          </Link>
        </div>
      </div>
      <hr />
      <div className="muttonSection mt-2">
        <h3 className="muttonSectionHeading">MUTTON</h3>
        <div>
          <Link className="linksWithBorder" to="">
            Goat Boneless
          </Link>
          <Link className="linksWithBorder" to="">
            Goat Mince/Keema
          </Link>
          <Link className="linksWithBorder" to="">
            Premium Lamb Curry Cut
          </Link>
          <Link className="linksWithBorder" to="">
            Goat Shoulder - Curry Cut
          </Link>
          <Link className="linksWithBorder" to="">
            Lamb Boneless
          </Link>
          <Link className="linksWithBorder" to="">
            Goat Curry Cut (Shoulder Chaamp Puth - 11 to 14 pieces)
          </Link>
        </div>
      </div>
      <hr />
      <div className="fishAndSeafoodSection mt-2">
        <h3 className="fishAndSeafoodSectionHeading">FISH & SEAFOOD</h3>
        <div>
          <Link className="linksWithBorder" to="">
            Seer (Surmai) Steaks
          </Link>
          <Link className="linksWithBorder" to="">
            Freshwater Rohu Large - Bengali Cut (w/o Head)
          </Link>
          <Link className="linksWithBorder" to="">
            White Pomfret - (Whole and Cleaned)
          </Link>
          <Link className="linksWithBorder" to="">
            Indian Salmon/Rawas Steaks
          </Link>
          <Link className="linksWithBorder" to="">
            Basa Fillet - (Platinum Grade)
          </Link>
          <Link className="linksWithBorder" to="">
            Prawns Small (Whole)
          </Link>
          <Link className="linksWithBorder" to="">
            Freshwater Rohu - Bengali Cut (Without Head)
          </Link>
          <Link className="linksWithBorder" to="">
            Singara Steaks
          </Link>
        </div>
      </div>
      <hr />
      <div className="faq">
        <h4 className="faqHeading">
          We will sell only the meat that we would eat ourselves.
        </h4>
        <p className="des">
          At Licious, we’re big meat-lovers. And by big, we mean huge. So when
          it comes to the meat we put on your plate, we’re extremely picky.
          Every single product is handpicked by a team with years of experience.
        </p>
        <h4 className="faqHeading">If it’s not fresh, we won’t sell it</h4>
        <p className="des">
          For meat to stay fresh and retain its natural juices, it needs to be
          stored at a temperature between 0° and 5°C. We maintain this
          temperature from the time we procure the product to cleaning, cutting
          and storing it, until it leaves for delivery. And even when it’s out
          for delivery, we keep it chilled right up to your doorstep.Did we
          mention that we’re obsessed?
        </p>
        <h4 className="faqHeading">We will charge only for what you buy</h4>
        <p className="des">
          Doesn’t everyone do this? Not really. Most other places first weigh
          the meat, then cut up the pieces, and throw out the parts which aren’t
          fit to eat, such as offal, gizzard, wingtips, etc. But you still pay
          based on the original weight even though what you finally get is 10%
          to 30% less.
        </p>
      </div>
      <hr />
      <div className="Copyright">
        <h5 className="copyrightHeading">
          2022 Delightful Gourmet Pvt Ltd. All Rights Reserved.
        </h5>
        <p className="copyRightDes">
          Licious is your one-stop fresh meat delivery shop. In here, you get
          nothing but the freshest meat & seafood, delivered straight to your
          doorstep. Now you can buy meat online anytime at your convenience.
          Indulge in our diverse selection: Chicken, Mutton, Seafood (Fish,
          Prawns, Crabs), Marinades & Cold Cuts. All our products are completely
          natural and healthy. Once you've experienced Licious, you'll never go
          back to the old way of buying meat and seafood.
        </p>
      </div>
    </div>
  );
}

export default Footer