import React from 'react'
import './contact.css';

export default function Contact() {
    return(
        <div className="contact">
            <div className="contact-items">
                <h1 className="title">Join 405,639 others in learning design</h1>
                <p className="description">
                    Receive a design lesson each week, crafted by a design pro.
                </p>
                <form action="" class="hero-form">
                    <input type="email" name="email_address" aria-label="email" placeholder="Email Address" required class="email-field" />

                    <button type="submit" class="btn">Get started</button>
                </form>
            </div>
        </div>
    )
}