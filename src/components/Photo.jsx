import React from "react"
import Images from "../assets/Images"

export default function Photo() {
    return (
        <div className="Photo">
            <img className='Photo__image' src={Images.profilePic} alt="profile pic" />
        </div>
    )
}