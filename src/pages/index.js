import React from "react"
import {Link} from 'gatsby'
import Layout from '../components/layout.js'
import {graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import Circles from '../components/circles'
//...GatsbyImageSharpFluid


const getImages = graphql`
{
  about:file(relativePath: {eq: "about.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
   arquivo: file(relativePath: {eq: "arquivo.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
   labirinto: file(relativePath: {eq: "labirinto.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
   parede: file(relativePath: {eq: "parede.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
    tmbr:file(relativePath: {eq: "tmbr.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
    tropa:file(relativePath: {eq: "tropa.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

export default ()=> {
  const data = useStaticQuery(getImages)
  return <div>
    
    <Layout>
      <div className="homepage">
        <div class="about">
          <div className="about-wraper">
          <Image fluid={data.about.childImageSharp.fluid} className="rotate" style={{maxHeight: '100%'}} imgStyle={{objectFit: 'contain'}}></Image>
          </div>
        </div>
        <div className=" homepage-main">
            <div className="main-top">
              <div className="main-top-center"> 
                <Image fluid={data.labirinto.childImageSharp.fluid} style={{maxHeight: '100%'}} imgStyle={{objectFit: 'contain'}}></Image>
                </div>
            </div>
            <div className="main-bottom">
              <div className="main-left">
                <Circles/>
              </div>
              <div className="main-center">
                <div className="main-center-image">
                <Image fluid={data.parede.childImageSharp.fluid} style={{maxHeight: '100%'}} imgStyle={{objectFit: 'contain'}} ></Image>
                </div>

              </div>
              <div className="main-right">
                <div className="main-right-top">
                <Image fluid={data.tropa.childImageSharp.fluid} style={{maxHeight: '100%'}} imgStyle={{objectFit: 'contain'}}></Image>
                </div>
                <div className="main-right-bottom">
                <Image fluid={data.arquivo.childImageSharp.fluid} style={{maxHeight: '100%'}} imgStyle={{objectFit: 'contain'}}></Image>
                </div>
              </div>
            </div>
          </div>
          <div class="tumblr">
            <div className="tumblr-wraper">
              <Image fluid={data.tmbr.childImageSharp.fluid} className="blink" ></Image>
            </div>
        </div>
        </div>
    </Layout>
    
    </div>

}
