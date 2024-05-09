import React from 'react'
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import ContactForm from './ContactForm/ContactForm'


const ContactMe = () => {
    return (
        <section id='contact-me' className='contact-container'>
            <h5>Bana Ulaşın</h5>

            <div className='contact-content'>

                <div style={{ flex: 1 }}>
                    <ContactInfoCard
                        iconUrl="./src/assets/images/email-icon.png"
                        text="hanstudiocontact@gmail.com"
                    />
                    <ContactInfoCard
                        iconUrl="./src/assets/images/github-icon.png"
                        text="https://github.com/wlanHan"
                    />
                </div>
                <div style={{ flex: 1 }}>

                    <ContactForm />

                </div>

            </div>

        </section>


    )
}

export default ContactMe
