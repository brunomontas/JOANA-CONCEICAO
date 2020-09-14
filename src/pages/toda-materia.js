import React from "react"
import Layout from '../components/layout.js'
import Navigator from "../components/navigationLaberith"
import Temple from "../components/temple"
import Video from "../components/video"
import videoMateria from "../images/video.mp4"



export default () => {
  return <div>
    {/*
        <Video
          videoSrcURL="https://www.youtube.com/embed/MCC98XFuTZk?autoplay=1"
          videoTitle="Toda a matéria"
        />
        */}
    <Navigator></Navigator>
    <Layout>
      <Temple>
        <video width={340} height={240} controls>
          <source src={videoMateria} type="video/mp4" />
        </video>
      </Temple>
    </Layout>
  </div>
}