import React from 'react'
import TempleBase from "../images/temple-base.svg"
import TempleTop from "../images/temple-top.svg"
import TempleColumn from "../images/temple-column.svg"


const temple = ({ children }) => {
  return (

    <div className="temple">
      <div className="temple-top">
        <img src={TempleTop} alt="temple top" />
      </div>
      <div className="temple-middle">
        <img src={TempleColumn} alt="temple column" style={{ height: '100%' }} className="left-column" />
        <div className="temple-entrance">
            <div className="temple-entrance-stage " >
              {children}
            </div>
        </div>
        <img src={TempleColumn} alt="temple column" style={{ height: '100%' }} className="right-column" />
      </div>
        <div className="temple-base">
          <img src={TempleBase} alt="temple base" />
        </div>
    </div>
  )
}

export default temple