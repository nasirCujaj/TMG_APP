import React, { Component } from 'react'
import './HomeSection.css'
import  test1 from './img/test.jpg'

export class HomeSection extends Component {

    
    render() {
   
        return (
            <div className="container">
                <img src={test1} alt="Snow" style={{width:'100%'}} />
                <button class="btn">Report Racism</button>
            </div>
        )
    }
}

export default HomeSection
