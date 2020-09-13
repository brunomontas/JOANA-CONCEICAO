import React from "react"
import Navigator from "../components/navigationLaberith"
import Temple from"../components/temple"
import Video from "../components/video"



export default ()=> {
  return <div>
    <Navigator></Navigator>
    <Temple>
        <Video
        videoSrcURL="https://www.youtube.com/embed/B26Z6hlrePo?controls=0&autoplay=1" 
        videoTitle="Mente certa"
        />
      </Temple> 
  </div>

}