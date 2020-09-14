import React from 'react'
import { Link } from 'gatsby'
import backIcon from "../images/back-icon.svg"


const navigation = () => {
    return (<div>
        <Link to="/labirinto/">
            <img src={backIcon} className="navigator" alt="back" /> 
        </Link>
    </div>
    )
}

export default navigation