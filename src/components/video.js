import React from 'react'


const video = ({ videoSrcURL, videoTitle }) => {
  return (


        <div className="temple-video">
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
  )
}

export default video