import React from 'react'
import Layout from '../components/layout.js'
import Image from "gatsby-image"
import Navigator from "../components/navigation"
import imageSoon from "../images/soon.svg"
import './layout.css'





export default ()=> {
    return (
        <div>
        <Navigator></Navigator>
        <Layout>
          <div className="temple soon">
            <img src={imageSoon} alt="soon" className="soon2"/>
            </div>
        </Layout>
        </div>
    )
}
