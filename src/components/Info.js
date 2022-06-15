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
                <button className="email-btn" href="">Email</button>
                <button className="linkedin-btn" href="">LinkedIn</button>
            </div>
        </div>
    )
}