import React from "react"
import LabirintoDesktop from '../components/labirintoDesktop'
import LabirintoMobile from '../components/labirintomobile'
import Navigator from "../components/navigation"
import Temple from "../components/temple"
import './layout.css'



export default ()=> {
  return <div>
        <Navigator></Navigator>
        <Temple>
          <LabirintoDesktop className="desktop-display"/>
          <LabirintoMobile className="mobile-display"/>
        </Temple>

      </div>
}