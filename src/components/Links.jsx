import React from 'react'
import Images from "./Images"

export default function Links() {
    return (
        <div className="Links">
            <a className='Links__link' href="https://www.linkedin.com/in/julio-cesar-vieira-alves-junior/">
                <img className='Links__link__logo' src={Images.linkedinIcon} alt="" />
            </a>
            <a className='Links__link' href="https://github.com/juliocjunior">
                <img className='Links__link__logo' id='logo__github' src={Images.githubIcon} alt="" />
            </a>
            <a className='Links__link' href="https://www.instagram.com/juliocsr.vieira/">
                <img className='Links__link__logo' src={Images.instagramIcon} alt="" />
            </a>
        </div>
    )
}