import React from 'react'
import {graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'

const query = graphql`
  {
    close:file(relativePath: {eq: "close.png"}) {
      childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

function closebout() {
    const aboutWindow = document.querySelector('.about-window');
    aboutWindow.classList.remove("open-about");
  
  }

export default ()=> {
    const data = useStaticQuery(query)
    return (
        <div className="about-window">
            <div className="about-window-close ">
                <a href="#" onClick={() => closebout()}>
                <Image fluid={data.close.childImageSharp.fluid} className="close-icon" ></Image>
                </a>
            </div>
            <div className="about-window-content">
                <h1>ABOUT</h1>
                <h3>Joana da Conceição</h3>
                <p>Joana da Conceição is an artist living and working in Lisbon. Her thinking and practice is rooted in painting and music, with the public presentations of her work revolving between the two.</p>
                <p>joana.da.conceicao.s@gmail.com</p>
            </div>
        </div>
    )
}


