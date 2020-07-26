import React, { Component } from 'react'
import './HomeSection.css'
import  test1 from './img/contact.jpg'

export class ContactUs extends Component {

    
    render() {
   
        return (
            <div className="container">
                <img src={test1} alt="Snow" style={{width:'100%'}} />
                <button class="btn">Contact Us</button>
            </div>
        )
    }
}

export default ContactUs
