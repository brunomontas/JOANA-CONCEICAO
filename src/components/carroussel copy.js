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

const slides = document.querySelectorAll(".mySlides");
console.log(slides)

const Carroussel = () => {

  const data = useStaticQuery(query)
  let slideIndex = 1;
  //const carrousselImages = [data.sintese1, data.sintese2, data.sintese3, data.sintese4, data.sintese5]
  //const [value, setValue] = React.useState(0)


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function showSlides(n) {
  var i;
  var slides = document.querySelectorAll("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
}


  return <div>



    {/* Slideshow container */}
    <div className="slideshow-container">
      {/* Full-width images with number and caption text */}
      <div className="mySlides fade">
        <Image fluid={data.sintese1.childImageSharp.fluid} style={{ height: "100%", width: "100%", }}
        imgStyle={{ objectFit: "contain", objectPosition: "top center" }} />
      </div>
      <div className="mySlides fade">
        <Image fluid={data.sintese2.childImageSharp.fluid} style={{ height: "100%", width: "100%", }}
        imgStyle={{ objectFit: "contain", objectPosition: "top center" }} />
      </div>
      <div className="mySlides fade">
        <Image fluid={data.sintese3.childImageSharp.fluid} style={{ height: "100%", width: "100%", }}
        imgStyle={{ objectFit: "contain", objectPosition: "top center" }} />
      </div>
      <div className="mySlides fade">
        <Image fluid={data.sintese4.childImageSharp.fluid} style={{ height: "100%", width: "100%", }}
        imgStyle={{ objectFit: "contain", objectPosition: "top center" }} />
      </div>
      <div className="mySlides fade">
        <Image fluid={data.sintese4.childImageSharp.fluid} style={{ height: "100%", width: "100%", }}
        imgStyle={{ objectFit: "contain", objectPosition: "top center" }} />
      </div>


      <a className="prev" onClick={() => plusSlides(-1)}>❮</a>
      <a className="next" onClick={() => plusSlides(1)}>❯</a>
    </div>
    {/*
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
                        if (value < (carrousselImages.length-1)) { setValue(value + 1) }}} />
                </div>
            </div>
        </div>
      */}
  </div>

}

export default Carroussel



