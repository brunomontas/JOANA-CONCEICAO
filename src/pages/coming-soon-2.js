import React from 'react'
import Layout from '../components/layout.js'
import Image from "gatsby-image"
import Navigator from "../components/navigation"
import imageSoon from "../images/soon.svg"





export default ()=> {
    return (
        <div>
        <Navigator></Navigator>
        <Layout>
          <div className="temple soon">
            <img src={imageSoon} alt="soon"/>
            </div>
        </Layout>
        </div>
    )
}
