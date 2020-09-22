import React from 'react'
import Layout from '../components/layout.js'
import {graphql, useStaticQuery } from 'gatsby'
import Image from "gatsby-image"
import Navigator from "../components/navigation"
import defaultImage from "../images/arquivo.jpeg"
import './layout.css'


const query = graphql`
  {
    joana:file(relativePath: {eq: "arquivo.jpeg"}) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid
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
        <div className="soon-3 ">
          <div className="soon-2">
              <Image 
                fluid={data.joana.childImageSharp.fluid}
                style={{ height: "100%", width: "100%", }}
                imgStyle={{ objectFit: "contain" , objectPosition: "top center"}}
                alt="coming soon"
              />
          </div>
            </div>

        </Layout>
        </div>
    )
}
