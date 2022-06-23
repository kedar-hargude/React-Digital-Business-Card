import React from "react"
import profile from "../images/kedar.jpg"

export function Info(){
    return(
        <div className="info--container">
            <img className="profile-pic" src={profile} alt="profile_pic" />
            <h1>Kedar Hargude</h1>
            <p>Frontend Developer</p>
            <a href="www.google.com">kedarhargude.website</a>
            <div className="buttons--container">
                <button className="email-btn">
                    <a href="#">Email</a>
                </button>
                <button className="linkedin-btn" >
                    <a href="https://www.linkedin.com/in/kedar-hargude-608850140">LinkedIn</a>
                </button>
            </div>
        </div>
    )
}