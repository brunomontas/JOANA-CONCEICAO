import React from "react"
import Navigator from "../components/navigationLaberith"
import Temple from"../components/temple"



export default ()=> {
  return <div>
    <Navigator></Navigator>
    <Temple
        videoSrcURL="https://www.youtube.com/embed/B26Z6hlrePo?controls=0&autoplay=1" 
        videoTitle="Meste certa"
      /> 
  </div>

}