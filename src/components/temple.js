import React from 'react'
import TempleBase from "../images/temple-base.svg"
import TempleTop from "../images/temple-top.svg"
import TempleColumn from "../images/temple-column.svg"





const temple = ({ videoSrcURL, videoTitle }) => {
  return (

    <div className="temple">
      <div className="temple-top">
        <img src={TempleTop} alt="temple top" />
      </div>
      <div className="temple-middle">
        <img src={TempleColumn} alt="temple column" style={{ height: '100%' }} className="left-column" />
        <div className="temple-entrance">
            <iframe
              src={videoSrcURL}
              title={videoTitle}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              frameBorder="0"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowFullScreen
            />
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