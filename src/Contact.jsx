import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <section className='contact-section'>
        <h1>conatct section</h1>
        <div className="container">
            <input type="text" placeholder='userName' />
            <input type="text" placeholder='userAge' />
            <input type="text" placeholder='userEmail' />
            <input type="text" placeholder='userPassword' />
            <div className="btns">
                <button className='btn'>send Message</button>
            </div>
        </div>
    </section>
  )
}

export default Contact