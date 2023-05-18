import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai'
import './Footer.scss'

const Footer = () => {
  return (
    <div className="footer">
        <div className="social">
            <AiFillFacebook className="icon" />
            <AiFillInstagram className="icon" />
            <AiOutlineTwitter className="icon" />
            <AiFillYoutube className="icon" />
        </div>
        <div className="container">
            <div className="col">
                <h3>About</h3>
                <p>Company</p>
                <p>Planning</p>
                <p>Terms</p>
                <p>Privacy</p>
            </div>
            <div className="col">
                <h3>Properties</h3>
                <p>What's New</p>
                <p>Sellers</p>
                <p>Terms</p>
                <p>Privacy</p>
            </div>
            <div className="col">
                <h3>Community</h3>
                <p>Careers</p>
                <p>Sitemap</p>
                <p>Customer Care</p>
                <p>Others</p>
            </div>
        </div>
    </div>
  )
}

export default Footer