import React from 'react'
import Button from './Button';

const LiciousMetaBanner = () => {
  return (
    <div className="liciousMetaBanner">
      <div style={{display:"flex",justifyContent:"space-between",padding:"10px 20px"}}>
        <div>
          <img
          width="115px"
            src="https://www.licious.in/img/rebranding/loyalty_licious_logo.svg"
            alt="liciousMeta"
          />
        </div>
        <div>
          <Button>JOIN NOW</Button>
        </div>
      </div>
      <hr />
        <b className='liciousMetaBannerText'>
          Enjoy unlimited free delivery & perks crafted for true meat lovers
        </b>
    </div>
  );
}

export default LiciousMetaBanner