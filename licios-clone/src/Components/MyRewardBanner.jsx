import React from 'react'
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from "react-icons/md";
const MyRewardBanner = () => {
  return (
    <div className="myRewardBanner">
      <div>
        <img
          src="https://www.licious.in/img/rebranding/rewards/rewards_icon.svg"
          alt="rewardBanner"
        />
      </div>
      <div
        className="d-flex justify-content-between flex-grow-1 px-2"
      >
        <div>
          <div className="myRewardBannerTitle mb-2">My Reward</div>
          <div className="myRewardBannerSubTitle">
            Place an order and win your next reward!
          </div>
        </div>
        <div className="myRewardBannerLink">
          <Link to="">
            CLICK TO VIEW
            <MdKeyboardArrowRight style={{fontSize:"1.1rem"}}/>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MyRewardBanner