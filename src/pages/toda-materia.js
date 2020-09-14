import React from "react"
import Layout from '../components/layout.js'
import Navigator from "../components/navigationLaberith"
import Temple from "../components/temple"
import Video from "../components/video"



export default () => {
  return <div>
    <Navigator></Navigator>
    <Layout>
      <Temple>
        <Video
          videoSrcURL="https://www.youtube.com/embed/MCC98XFuTZk?autoplay=1"
          videoTitle="Toda a matéria"
        />
      </Temple>
    </Layout>
  </div>
}