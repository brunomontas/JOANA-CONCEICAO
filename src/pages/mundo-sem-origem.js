import React from "react"
import Navigator from "../components/navigationLaberith"
import Temple from"../components/temple"



export default ()=> {
  return <div>
    <Navigator></Navigator>
    <Temple
        videoSrcURL="https://www.youtube.com/embed/uWI4frRB4BY?controls=0&autoplay=1"
        videoTitle="Mundo sem origem"
      /> 
  </div>
}