import React from "react"
import Layout from '../components/layout.js'
import LabirintoDesktop from '../components/labirintoDesktop'
import LabirintoMobile from "../components/labirintomobile"
import Navigator from "../components/navigation"
import Temple from "../components/temple"


export default ()=> {
  return <div>
        <Navigator></Navigator>
        <Temple>
        <LabirintoDesktop className="desktop-display"/>
          <LabirintoMobile className="mobile-display"/>
        </Temple>
      </div>
}