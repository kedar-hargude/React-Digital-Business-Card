import React from "react"
import { Info } from "./components/Info.js"
import { About } from "./components/About.js"
import { Interests } from "./components/Interests.js"
import { Footer } from "./components/Footer.js"


export function App(){
    return(
        <div className="all--container">
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}