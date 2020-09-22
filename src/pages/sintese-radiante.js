import React from "react"
import Layout from '../components/layout.js'
import Navigator from "../components/navigationLaberith"
import Temple from "../components/temple"
import Carroussel from "../components/carroussel"
import './layout.css'




export default () => {

  return <div>
    <Navigator></Navigator>
    <Layout>
      <Temple>
          <Carroussel></Carroussel>
      </Temple>
    </Layout>
  </div>
}