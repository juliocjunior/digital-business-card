import React from 'react'
import Images from "./Images"

export default function Contact() {
    return (
        <div className="Contact">
            <h1 className='Contact__name'>Julio Cesar Vieira</h1>
            <h3 className='Contact__job'>Frontend Developer</h3>
            <div className="Contact__button">
                <a className='Contact__button__a' href="mailto:juliocesarjuniorjja@hotmail.com">
                    <button className='Contact__button__a__email'>
                        <img className='Contact__button__a__email__image' src={Images.mailIcon} alt="mail icon" />
                        <p className='Contact__button__a__email__text'>Email</p>
                    </button>
                </a>
            </div>
        </div>
    )
}