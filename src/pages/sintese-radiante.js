import React from "react"
import Palco from "../components/palco"
import Navigator from "../components/navigationLaberith"



export default ()=> {
  return <div>
    <Navigator></Navigator>
    <Palco>
    <iframe width={560} height={315} src="https://www.youtube.com/embed/EZyuY0raL8o?controls=0&autoplay=1" frameborder="0" allow="accelerometer; autoplay; modestbranding; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
    </Palco>
  </div>
}