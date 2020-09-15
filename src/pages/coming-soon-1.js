import React from 'react'
import Layout from '../components/layout.js'
import {graphql, useStaticQuery } from 'gatsby'
import Image from "gatsby-image"
import Navigator from "../components/navigation"
import defaultImage from "../images/arquivo.jpeg"


const query = graphql`
  {
    joana:file(relativePath: {eq: "arquivo.jpeg"}) {
      childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`



export default ()=> {

  const data = useStaticQuery(query)

    return (
        <div>
        <Navigator></Navigator>
        <Layout>
            <div className="comming-soon">
              <img src={defaultImage} alt="teste"/>
            </div>
        </Layout>
        </div>
    )
}
