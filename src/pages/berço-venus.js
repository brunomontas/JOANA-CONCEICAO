import React from "react"
import Layout from '../components/layout.js'
import Temple from "../components/temple"
import Navigator from "../components/navigationLaberith"
import Video from "../components/video"



export default () => {
  return <div>
    <Navigator></Navigator>
    <Layout>
      <Temple>
        <Video
          videoSrcURL="https://www.youtube.com/embed/Xr6GCIvnuQw?autoplay=1"
          videoTitle="Berço de vénus"
        />
      </Temple>
    </Layout>
  </div>
}