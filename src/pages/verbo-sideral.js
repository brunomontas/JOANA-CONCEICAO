import React from "react"
import Navigator from "../components/navigationLaberith"
import Temple from "../components/temple"
import Video from "../components/video"


export default ()=> {
  return <div>
      <Navigator></Navigator>
      <Temple>
        <Video
        videoSrcURL="https://player.vimeo.com/video/436177069"
        videoTitle="Verbo Sideral"
        />
      </Temple>
  </div>
}