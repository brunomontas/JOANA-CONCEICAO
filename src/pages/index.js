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






function openCloseAbout() {
  const aboutWindow = document.querySelector('.about-window');
  aboutWindow.classList.toggle("open-about");

}


export default () => {



  return <div>
    
    <Layout>
    <div className="about-window">
            <img src={closeIcon} className="close-icon" onClick={() => openCloseAbout()} role = "button" alt="close"/>
            <div className="about-window-content">
                <h1>Joana da Conceição</h1>
                <h3>Joana da Conceição is an artist living and working in Lisbon. Her thinking and practice is rooted in painting and music, with the public presentations of her work revolving between the two.</h3>
                <h2>joana.da.conceicao.s@gmail.com</h2>
            </div>
        </div>
      <div className="homepage">
        <div className="about">
          <div className="about-wraper" onClick={() => openCloseAbout()} role="button" >
            <img src={AboutIcon} className="rotate" style={{ maxHeight: '100%' }} imgStyle={{ objectFit: 'contain' }} alt="about"/>
          </div>
        </div>
        <div className=" homepage-main">
          <div className="main-top">
            <div className="main-top-center">
              <Link to="/labirinto/">
                <img src={Labirinto} style={{ maxHeight: '100%' }} imgStyle={{ objectFit: 'contain' }} alt="labirinto"/>
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
                <Link to="/coming-soon/">
                  <img src={Parede} style={{ maxHeight: '100%' }} imgStyle={{ objectFit: 'contain' }} alt="parede" />
                </Link>
              </div>

            </div>
            <div className="main-right">
              <div className="main-right-top">
                <a href="https://tropamacaca.com/" target="_blank" rel="noreferrer">
                  <img src={Tropa} style={{ maxHeight: '100%' }} imgStyle={{ objectFit: 'contain' }} alt="tropa macaca"/>
                </a>
              </div>
              <div className="main-right-bottom">
                <Link to="coming-soon">
                  <img src={Arquivo} style={{ maxHeight: '100%' }} imgStyle={{ objectFit: 'contain' }} alt="arquivo"/>
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
