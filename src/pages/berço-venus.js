import React from "react"
import Temple from"../components/temple"
import Navigator from "../components/navigationLaberith"



export default ()=> {
  return <div>
    <Navigator></Navigator>
    <Temple
        videoSrcURL="https://www.youtube.com/embed/Xr6GCIvnuQw?controls=0&autoplay=1"
        videoTitle="Berço de vénus"
      /> 
      </div>
}