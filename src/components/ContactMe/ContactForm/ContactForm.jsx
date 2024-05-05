import React from 'react'
import './ContactForm.css'

const ContactForm = () => {
    return (

        <div className='contact-form-content'>
            <form>
                <div className='name-container'>
                    <input type='text' name='firstname' placeholder='Adınız' />
                    <input type='text' name='lastname' placeholder='Soyadınız' />
                </div>
                
                <input type='text' name='mail' placeholder='Email' />
                <textarea type="text" name='message' placeholder='Mesajınız' rows={3} />

                <button>Gönder</button>
            </form>

        </div>
    )
}

export default ContactForm
