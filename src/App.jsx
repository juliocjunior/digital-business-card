import React from "react"
import Images from "./assets/Images"

function App() {
  return (
    <body>
      <div className="container">
        <div className="Photo">
          <img className='Photo__image' src={ Images.profilePic } alt="profile pic" />
        </div>
        <div className="Contact">
          <h1 className='Contact__name'>Julio Cesar Vieira</h1>
          <h3 className='Contact__job'>Frontend Developer</h3>
          <div className="Contact__button">
            <a className='Contact__button__a' href="mailto:juliocesarjuniorjja@hotmail.com">
              <button className='Contact__button__a__email'>
                <img className='Contact__button__a__email__image' src={ Images.mailIcon } alt="mail icon" />
                <p className='Contact__button__a__email__text'>Email</p>
              </button>  
            </a>
          </div>
        </div>
        <div className="Info">
          <h2 className='Info__title'>Sobre</h2>
          <p className='Info__text'>Sou um programador Frontend que gosta de criar coisas novas e criativas. Tento ao máximo deixar meus projetos orgnaizados usando das boas práticas. </p>
          <h2 className='Info__title' id='title__interesses' >Interesses</h2>
          <p className='Info__text'>Gosto de sempre aprender coisas novas de diversas áreas, ouvir perspectivas diferentes e dividir meus conhecimentos.</p>
        </div>
        <div className="Links">
          <a className='Links__link' href="https://www.linkedin.com/in/julio-cesar-vieira-alves-junior/">
            <img className='Links__link__logo' src={ Images.linkedinIcon } alt="" />
          </a>
          <a className='Links__link' href="https://github.com/juliocjunior">
            <img className='Links__link__logo' id='logo__github' src={ Images.githubIcon } alt="" />
          </a>
          <a className='Links__link' href="https://www.instagram.com/juliocsr.vieira/">
            <img className='Links__link__logo' src={ Images.instagramIcon } alt="" />
          </a>
        </div>
      </div>
    </body>
  )
}

export default App
