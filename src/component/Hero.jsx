import React from 'react'

function Hero() {
    return (
        <main className='hero'>
            <div className="hero-content">
                <h1>VISHAL KUSHWAHH !! </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ab in iure quos deleniti temporibus dolores nesciunt alias reiciendis natus.</p>
                <div className="hero-btn">
                    <button>GitHub</button>
                    <button className='second-btn'>Check Now</button>
                </div>
            </div>
            <div className="hero-image">
                <img src="/public/images/new.jpeg" alt="" />
            </div>
        </main>
    )
}

export default Hero
