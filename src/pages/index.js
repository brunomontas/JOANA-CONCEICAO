import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout.js'
import Circles from '../components/circles'
import Tropa from '../images/tropa.svg'
import Arquivo from '../images/arquivo.svg'
import Parede from '../images/parede.svg'
import Labirinto from '../images/labirinto.svg'
import AboutIcon from '../images/about-icon.svg'
import Tumblr from '../images/tumblr.svg'
import closeIcon from "../images/close-icon.svg"
import './layout.css'






function openAbout() {
  const aboutWindow = document.querySelector('.about-window');
  aboutWindow.classList.add("open-about");

}

function closeAbout() {
  const aboutWindow = document.querySelector('.about-window');
  aboutWindow.classList.remove("open-about");

}


export default () => {



  return <div>
    
    <Layout>
    <div className="about-window">
            <div onClick={() => closeAbout()} role="button" className="close-icon">
            <img src={closeIcon} className="close-icon"  alt="close"/>
            </div>
            <div className="about-window-content">
                <h1>Joana da Conceição</h1>
                <h3>Joana da Conceição is an artist living and working in Lisbon. Her thinking and practice is rooted in painting and music, with the public presentations of her work revolving between the two.</h3>
                <h3>joana.da.conceicao.s@gmail.com</h3>
            </div>
        </div>
      <div className="homepage">
        <div className="about">
          <div className="about-wraper" onClick={() => openAbout()} role="button" >
            <img src={AboutIcon} className="rotate" style={{ maxHeight: '100%' }}  alt="about"/>
          </div>
        </div>
        <div className=" homepage-main">
          <div className="main-top">
            <div className="main-top-center">
              <Link to="/labirinto/">
                <img src={Labirinto} style={{ maxHeight: '100%' }}  alt="labirinto"/>
              </Link>
            </div>
          </div>
          <div className="main-bottom">
            <div className="main-left">
              <a href="http://joanadaconceicao.com/" target="_blank" rel="noreferrer">
                <Circles />
              </a>
            </div>
            <div className="main-center">
              <div className="main-center-image">
                <Link to="/coming-soon-2/">
                  <img src={Parede} style={{ maxHeight: '100%' }}  alt="parede" />
                </Link>
              </div>

            </div>
            <div className="main-right">
              <div className="main-right-top">
                <a href="https://tropamacaca.com/" target="_blank" rel="noreferrer">
                  <img src={Tropa} style={{ maxHeight: '100%' }}  alt="tropa macaca"/>
                </a>
              </div>
              <div className="main-right-bottom">
                <Link to="/coming-soon-1/">
                  <img src={Arquivo} style={{ maxHeight: '100%' }}  alt="arquivo" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="tumblr">
          <div className="tumblr-wraper">
            <a href="https://joanadaconceicao.tumblr.com/" target="_blank" rel="noreferrer">
              <img src={Tumblr} className="animate-flicker" alt="tumblr" />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  </div>

}
