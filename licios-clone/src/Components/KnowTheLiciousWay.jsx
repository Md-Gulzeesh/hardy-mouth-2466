import React from 'react'

const KnowTheLiciousWay = () => {
  return (
    <div style={{textAlign:"center"}}>
      <div className="knowTheLiciousWay">
        <h2>Know the Licious way</h2>
        <div>
          <span className="knowTheLiciousWayInnerText">Premium Produce</span>
        </div>
        <div className="knowTheLiciousWayInnerDivBorder">
          <span className="knowTheLiciousWayInnerText">
            World-Class Central Production Unit
          </span>
        </div>
        <div className="knowTheLiciousWayInnerDivBorder">
          <span className="knowTheLiciousWayInnerText">150 Quality Checks</span>
        </div>
        <div className="knowTheLiciousWayInnerDivBorder">
          <span className="knowTheLiciousWayInnerText">
            {" "}
            Delivered Fresh Everyday
          </span>
        </div>
        <div className="knowTheLiciousWayInnerDivBorder">
          <span className="knowTheLiciousWayInnerText">
            Extraordinary Cooking
          </span>
        </div>
      </div>
      <img
      style={{marginTop:"1rem",borderRadius:"5px",width:"80%"}}
        src="https://dao54xqhg9jfa.cloudfront.net/OMS-StaticBanner/8a549ef6-cd0a-9d53-6e30-41c4601e3413/original/static-bank-units-Aug-web_(20).jpg?format=webp"
        alt=""
      />
    </div>
  );
}

export default KnowTheLiciousWay