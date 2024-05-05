import React from 'react'
import './Hero.css'
const Hero = () => {
    return (
        <>

            <section className='hero-container'>
                <div className="hero-content">
                    <h2>Efe Han Öz</h2>
                    <p>
                        İşini Seven Bir Frontend Developer | İleriye dönük, Ufak Detayların Etkisine İnanan, Kendisi Junior Ama İçindeki Senior Olan Developer ^^
                    </p>
                </div>

                <div className='hero-img'>
                    <div>
                        <div className='tech-icon'>
                            <img src="./src/assets/images/react-icon.png" alt="img1" />
                        </div>
                        <img className='croc' src="https://www.indivstock.com/static49/preview1/stock-photo-portrait-of-a-crocodile-in-a-business-suit-office-background-created-with-generative-ai-976175.jpg" alt="img2" />
                    </div>

                    <div>
                        <div className="tech-icon">
                            <img src="./src/assets/images/html5-icon.png" alt="html" />
                        </div>
                        <div className="tech-icon">
                            <img src="./src/assets/images/css3-icon.png" alt="html" />
                        </div>
                        <div className="tech-icon">
                            <img src="./src/assets/images/javascript-icon.png" alt="html" />
                        </div>
                        <div className="tech-icon">
                            <img src="./src/assets/images/django-icon.png" alt="html" />
                        </div>
                        <div className="tech-icon">
                            <img src="./src/assets/images/python-icon.png" alt="html" />
                        </div>
                    </div>


                </div>
            </section>


        </>
    )
}

export default Hero
