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
          videoSrcURL="https://www.youtube.com/embed/B26Z6hlrePo?autoplay=1"
          videoTitle="Mente certa"
        />
      </Temple>
    </Layout>
  </div>

}