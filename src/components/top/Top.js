import React from 'react'
import prop1 from '../../assets/prop1.jpg'
import prop2 from '../../assets/prop2.jpg'
import prop3 from '../../assets/prop3.jpg'
import './Top.scss'

const Top = () => {
    return (
        <div className="top-prop">
            <h1>Recommended For You</h1>
            <div className="options">
                <p>
                    <span className="bold">
                        All
                    </span>
                </p>
                <p>Commercial</p>
                <p>Residential</p>
                <p>Green</p>
            </div>
            <div className="container">
                <img src={prop1} alt="" />
                <img src={prop2} alt="" />
                <img src={prop3} alt="" />
            </div>
            <button className="btn">
                View All
            </button>
        </div>
    )
}

export default Top