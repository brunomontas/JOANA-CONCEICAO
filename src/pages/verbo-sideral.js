import React from "react"
import Layout from '../components/layout.js'
import Navigator from "../components/navigationLaberith"
import Temple from "../components/temple"
import VideoLink from "../images/verbosideral.mp4"
import './layout.css'



export default () => {
  return <div>
    <Navigator></Navigator>
    <Layout>
      <Temple>
        <div className="player-overlay ">
          <video controls  autoPlay muted playsinline>
            <source src={VideoLink} type="video/mp4" />
          </video>
        </div>
      </Temple>
    </Layout>
  </div>
}