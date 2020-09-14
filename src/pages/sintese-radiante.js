import React from "react"
import Layout from '../components/layout.js'
import Navigator from "../components/navigationLaberith"
import Temple from "../components/temple"
import caçador from "../images/cacador.svg"
import {graphql, useStaticQuery } from 'gatsby'
import Image from "gatsby-image"

export const query = graphql`
  {
    sintese1: file(relativePath: {eq: "sintese1.jpg"}) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
    sintese2: file(relativePath: {eq: "sintese2.jpg"}) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
    sintese3: file(relativePath: {eq: "sintese3.jpg"}) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
    sintese4: file(relativePath: {eq: "sintese4.jpg"}) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
    sintese5: file(relativePath: {eq: "sintese5.jpg"}) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
  }
`



export default () => {
  const data = useStaticQuery(query)
  return <div>
    <Navigator></Navigator>
    <Layout>
      <Temple>
        <div className="sintese-image-wrapper">
        <img src={caçador} alt="caçador do futuro" className="sintese-caçador-futuro"/>
        <Image fluid={data.sintese1.childImageSharp.fluid} style={{ height: "100%", width: "100%", }}
  imgStyle={{ objectFit: "contain" , objectPosition: "top center"}}></Image>
  {/*comment 
  
  <Image fluid={data.sintese2.childImageSharp.fluid} style={{ height: "100%", width: "100%", }}
  imgStyle={{ objectFit: "contain" , objectPosition: "top center"}}></Image>
  <Image fluid={data.sintese3.childImageSharp.fluid} style={{ height: "100%", width: "100%", }}
  imgStyle={{ objectFit: "contain" , objectPosition: "top center"}}></Image>
  <Image fluid={data.sintese4.childImageSharp.fluid} style={{ height: "100%", width: "100%", }}
  imgStyle={{ objectFit: "contain" , objectPosition: "top center"}}></Image>
  <Image fluid={data.sintese5.childImageSharp.fluid} style={{ height: "100%", width: "100%", }}
  imgStyle={{ objectFit: "contain" , objectPosition: "top center"}}></Image>
  */}
        </div>
      </Temple>
    </Layout>
  </div>
}