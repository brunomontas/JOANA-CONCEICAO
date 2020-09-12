import React from "react"
import Layout from '../components/layout.js'
import LabirintoDesktop from '../components/labirintoDesktop'
import LabirintoMobile from "../components/labirintomobile"
import Navigator from "../components/navigation"


export default ()=> {
  return <div>
        <Navigator></Navigator>
        <Layout>
          <LabirintoDesktop className="desktop-display"/>
          <LabirintoMobile className="mobile-display"/>
        </Layout>
      </div>
}