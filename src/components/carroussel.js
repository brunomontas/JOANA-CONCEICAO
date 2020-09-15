import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from 'gatsby-image'
import caçador from "../images/cacador.svg"
import backIcon from "../images/back-icon.svg"
import forwardIcon from "../images/forward-icon.svg"

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
    const carrousselImages = [data.sintese1, data.sintese2, data.sintese3, data.sintese5]
    const [value, setValue] = React.useState(0)

    return <div>
        <div className="carroussel">
            <div className="carroussel-top">
                <img src={caçador} alt="caçador do futuro"  />
            </div>
            <div className="carroussel-bottom">
                <div className="carroussel-bottom-left">
                        <img src={backIcon} alt="caçador do futuro" onClick={() => {
                        if (value > 0) { setValue(value - 1) }}} />
                </div>
                <div className="carroussel-bottom-center" >
                    <Image fluid={carrousselImages[value].childImageSharp.fluid} style={{ height: "100%", width: "100%", }}
                        imgStyle={{ objectFit: "contain", objectPosition: "top center" }} />
                </div>
                <div className="carroussel-bottom-right">
                <img src={forwardIcon} alt="caçador do futuro" onClick={() => {
                        if (value < (carrousselImages.length - 1)) { setValue(value + 1) }}} />
                </div>
            </div>
        </div>
    </div>

}

export default Carroussel


