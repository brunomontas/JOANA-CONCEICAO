import React from "react"
import Navigator from "../components/navigationLaberith"
import Temple from"../components/temple"





export default ()=> {
  return <div>
      <Navigator></Navigator>
      <Temple
        videoSrcURL="https://player.vimeo.com/video/436177069"
        videoTitle="Verbo Sideral"
      />
  </div>
}