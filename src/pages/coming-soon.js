import React from 'react'
import Layout from '../components/layout.js'
import {graphql, useStaticQuery } from 'gatsby'
import Image from "gatsby-image"
import Navigator from "../components/navigation"



const query = graphql`
  {
    joana:file(relativePath: {eq: "joana.jpg"}) {
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
            <Image fluid={data.joana.childImageSharp.fluid} imgStyle={ {textAlign: 'center'}}></Image>
            <h1>Coming soon</h1>
            </div>
        </Layout>
        </div>
    )
}
