import React from 'react'
import house1 from '../../assets/house1.jpg'
import bath1 from '../../assets/bath1.jpg'
import kitchen1 from '../../assets/kitchen1.jpg'
import living1 from '../../assets/living1.jpg'
import bed1 from '../../assets/bed1.jpg'

import house2 from '../../assets/house2.jpg'
import bath2 from '../../assets/bath2.jpg'
import kitchen2 from '../../assets/kitchen2.jpg'
import living2 from '../../assets/living2.jpg'
import bed2 from '../../assets/bed2.jpg'
import './Featured.scss'

const Featured = () => {
    return (
        <div className="featured">
            <h1 className="title">
                Top Rated Listings
            </h1>
            <p className="fText">
                PrimeHomes believes in building world-class communities fit for your every need. Take a look at these other communities!
            </p>
            <div className="container">
                <img className="span-3 img-grid" src={house1} alt="" />
                <img src={bath1} alt="" />
                <img src={kitchen1} alt="" />
                <img src={living1} alt="" />
                <img src={bed1} alt="" />
                <div className="span-3 img-details">
                    <div className="top">
                        <h2>
                            13 Queens, Toronto, ON
                        </h2>
                        <p className="price">
                            $1,002,300
                        </p>
                    </div>
                    <div className="info-grid">
                        <div>
                            <div className="info">
                                <p className="bold">Bedrooms:</p>
                                <p>3</p>
                            </div>
                            <div className="info">
                                <p className="bold">Bathrooms:</p>
                                <p>2</p>
                            </div>
                        </div>
                        <div>
                            <div className="info">
                                <p className="bold">Square Feet:</p>
                                <p>500</p>
                            </div>
                            <div className="info">
                                <p className="bold">Payment:</p>
                                <p>$10,000/mo</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="span-2 right-img">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus odio in tortor tempus, quis tempus elit rutrum.
                    </p>
                    <button className="btn">
                        View Listing
                    </button>
                </div>
            </div>

            {/*  */}

            <div className="container">
                <img className="order-2" src={bath2} alt="" />
                <img className="order-3" src={kitchen2} alt="" />
                <img className="span-3 img-grid order-1" src={house2} alt="" />
                <img className="order-4" src={living2} alt="" />
                <img className="order-5" src={bed2} alt="" />

                <div className="span-2 right-img order-7">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus odio in tortor tempus, quis tempus elit rutrum.
                    </p>
                    <button className="btn">
                        View Listing
                    </button>
                </div>

                <div className="span-3 img-details order-6">
                    <div className="top">
                        <h2>
                            12 Adelaide, London, ON
                        </h2>
                        <p className="price">
                            $1,002,300
                        </p>
                    </div>
                    <div className="info-grid">
                        <div>
                            <div className="info">
                                <p className="bold">Bedrooms:</p>
                                <p>3</p>
                            </div>
                            <div className="info">
                                <p className="bold">Bathrooms:</p>
                                <p>2</p>
                            </div>
                        </div>
                        <div>
                            <div className="info">
                                <p className="bold">Square Feet:</p>
                                <p>500</p>
                            </div>
                            <div className="info">
                                <p className="bold">Payment:</p>
                                <p>$10,000/mo</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured