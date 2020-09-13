import React from "react"
import Navigator from "../components/navigationLaberith"
import Temple from"../components/temple"



export default ()=> {
  return <div>
    <Navigator></Navigator>
    <Temple
        videoSrcURL="https://www.youtube.com/embed/MCC98XFuTZk?controls=0&autoplay=1&playsinline=1"
        videoTitle="Toda a matéria"
      />  
  </div>
}