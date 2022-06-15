import React from "react"
import twitterLogo from "../images/twitter.png"
import githubLogo from "../images/github.png"

export function Footer(){
    return(
        <div className="footer--container">
            <a href="#" target="_blank" className="twitter-icon"><img src={twitterLogo} alt="twitter-icon" width="55px" /></a>
            <a href="#" target="_blank" className="github-icon"><img src={githubLogo} alt="twitter-icon" width="60px" /></a>
        </div>
    )
}