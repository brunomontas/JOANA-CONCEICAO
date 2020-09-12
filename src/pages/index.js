import React from "react"
import {Link} from 'gatsby'
import Layout from '../components/layout.js'
import {graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import Circles from '../components/circles'
import About from '../components/about'
//...GatsbyImageSharpFluid


const getImages = graphql`
{
  about:file(relativePath: {eq: "about.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
   arquivo: file(relativePath: {eq: "arquivo.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
   labirinto: file(relativePath: {eq: "labirinto.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
   parede: file(relativePath: {eq: "parede.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
    tmbr:file(relativePath: {eq: "tmbr.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
    tropa:file(relativePath: {eq: "tropa.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
}
`

function openAbout() {
  const aboutWindow = document.querySelector('.about-window');
  aboutWindow.classList.add("open-about");

}


export default ()=> {

  const data = useStaticQuery(getImages)

  return <div>
    <About></About>
    <Layout>
      <div className="homepage">
        <div className="about">
          <div className="about-wraper" onClick={() => openAbout()}>
          <Image fluid={data.about.childImageSharp.fluid} className="rotate" style={{maxHeight: '100%'}} imgStyle={{objectFit: 'contain'}}></Image>
          </div>
        </div>
        <div className=" homepage-main">
            <div className="main-top">
              <div className="main-top-center"> 
                <Link to="/labirinto/">
                <Image fluid={data.labirinto.childImageSharp.fluid} style={{maxHeight: '100%'}} imgStyle={{objectFit: 'contain'}}></Image>
                </Link>
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
                  <a href="https://tropamacaca.com/" target="_blank">
                <Image fluid={data.tropa.childImageSharp.fluid} style={{maxHeight: '100%'}} imgStyle={{objectFit: 'contain'}}></Image>
                  </a>
                </div>
                <div className="main-right-bottom">
                <Image fluid={data.arquivo.childImageSharp.fluid} style={{maxHeight: '100%'}} imgStyle={{objectFit: 'contain'}}></Image>
                </div>
              </div>
            </div>
          </div>
          <div className="tumblr">
            <div className="tumblr-wraper">
              <a href="https://joanadaconceicao.tumblr.com/" target="_blank">
              <Image fluid={data.tmbr.childImageSharp.fluid} className="blink" ></Image>
              </a>
            </div>
        </div>
        </div>
    </Layout>
    
    </div>

}
