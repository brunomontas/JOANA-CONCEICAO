import React from "react"
import {Link} from 'gatsby'
import Layout from '../components/layout.js'
import Circles from '../components/circles'
import About from '../components/about'
import Tropa from '../images/tropa.svg'
import Arquivo from '../images/arquivo.svg'
import Parede from '../images/parede.svg'
import Labirinto from '../images/labirinto.svg'
import AboutIcon from '../images/about.svg'
import Tumblr from '../images/tumblr.svg'






function openAbout() {
  const aboutWindow = document.querySelector('.about-window');
  aboutWindow.classList.add("open-about");

}


export default ()=> {



  return <div>
    <About></About>
    <Layout>
      <div className="homepage">
        <div className="about">
          <div className="about-wraper" onClick={() => openAbout()}  role = "button" >
          <img src={AboutIcon}  className="rotate" style={{maxHeight: '100%'}} imgStyle={{objectFit: 'contain'}}/>
          </div>
        </div>
        <div className=" homepage-main">
            <div className="main-top">
              <div className="main-top-center"> 
                <Link to="/labirinto/">
                <img src={Labirinto} style={{maxHeight: '100%'}} imgStyle={{objectFit: 'contain'}}></img>
                </Link>
                </div>
            </div>
            <div className="main-bottom">
              <div className="main-left">
                <Circles/>
              </div>
              <div className="main-center">
                <div className="main-center-image">
                <img src={Parede}  style={{maxHeight: '100%'}} imgStyle={{objectFit: 'contain'}} />
                </div>

              </div>
              <div className="main-right">
                <div className="main-right-top">
                  <a href="https://tropamacaca.com/" target="_blank" rel="noreferrer">
                <img src={Tropa} style={{maxHeight: '100%'}} imgStyle={{objectFit: 'contain'}}/>
                  </a>
                </div>
                <div className="main-right-bottom">
                <img src={Arquivo} style={{maxHeight: '100%'}} imgStyle={{objectFit: 'contain'}}/>
                </div>
              </div>
            </div>
          </div>
          <div className="tumblr">
            <div className="tumblr-wraper">
              <a href="https://joanadaconceicao.tumblr.com/" target="_blank" rel="noreferrer">
              <img src={Tumblr} className="animate-flicker" ></img>
              </a>
            </div>
        </div>
        </div>
    </Layout>
    
    </div>

}
