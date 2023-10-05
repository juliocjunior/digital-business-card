import React from "react"
import Images from "./assets/Images"
import Contact from "./components/Contact"
import Info from "./components/Info"
import Links from "./components/Links"
import Photo from "./components/Photo"


export default function App() {
  return (
    <body>
      <div className="container">
        <Photo />
        <Contact />
        <Info />
        <Links />
      </div>
    </body>
  )
}


