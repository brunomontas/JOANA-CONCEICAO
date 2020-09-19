import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from 'gatsby-image'
import caçador from "../images/cacador.svg"
import backIcon from "../images/back-icon.svg"
import forwardIcon from "../images/forward-icon.svg"
import VideoLink from "../images/ínteseradiante.mp4"
import musicLink from "../images/audiofuturo.mp3"

const query = graphql`
{
    sintese1: file(relativePath: {eq: "sintese1.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
        }
      }
    }
    sintese2: file(relativePath: {eq: "sintese2.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
        }
      }
    }
    sintese3: file(relativePath: {eq: "sintese3.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
        }
      }
    }
    sintese4: file(relativePath: {eq: "sintese4.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
        }
      }
    }
    sintese5: file(relativePath: {eq: "sintese5.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
        }
      }
    }
  }
`


const Carroussel = () => {

  const data = useStaticQuery(query)
  const carrousselImages = [data.sintese1, data.sintese2, data.sintese3, data.sintese4, data.sintese5]
  const [value, setValue] = React.useState(0)
  


  return <div>
    <div className="carroussel">
      <div className="carroussel-top">
        <img src={caçador} alt="caçador do futuro" className="audio-play-image"onClick={() => {
            const audioEl = document.getElementsByClassName("audio-element")[0]
            if(audioEl.paused){
              audioEl.currentTime = 0;
              audioEl.play();
            }else{
              audioEl.pause();
            }
          }} />
        <audio className="audio-element">
          <source src={musicLink} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      </div>
      <div className="carroussel-bottom">
        <div className="carroussel-bottom-left">
          <img src={backIcon} className="arrow-left" alt="caçador do futuro" onClick={() => {
            if (value > 0) { setValue(value - 1) }
            if (value === 0) { setValue(3) }

          }} />
        </div>
        <div className="carroussel-bottom-center" >
          {
            value === carrousselImages.length
              ? <video controls autoPlay><source src={VideoLink} type="video/mp4" /></video>
              : <Image fluid={carrousselImages[value].childImageSharp.fluid} style={{ height: "100%", width: "100%", }}
                imgStyle={{ objectFit: "contain", objectPosition: "top center" }} />
          }

        </div>
        <div className="carroussel-bottom-right">
          <img src={forwardIcon} className="arrow-right" alt="caçador do futuro" onClick={() => {
            if (value < 5) { setValue(value + 1) }
            if (value === 5) { setValue(0) }
          }} />
        </div>
      </div>
    </div>
  </div>

}

export default Carroussel