import React from "react"
import Temple from"../components/temple"
import Navigator from "../components/navigationLaberith"
import Video from "../components/video"



export default ()=> {
  return <div>
    <Navigator></Navigator>
    <Temple>
        <Video
        videoSrcURL="https://www.youtube.com/embed/UUvN7_El3sA?controls=0&autoplay=1" 
        videoTitle="Guia interior"
        />
      </Temple> 
  </div>

}