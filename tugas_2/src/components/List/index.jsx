import React from 'react'
import './list.css'

export default function List(props) {
    return(
        <div className="container">
            <div className="row">
                <img className="hero-image" src={props.heroImage} />
                <div className="column">
                    <h1 className='hero-title'>{ props.title }</h1>
                    <p>{ props.description }</p>
                    <div className="footer">
                        <button className="footer-button">Read Lesson</button>
                        <div className="user-profile">
                            <p>{ props.username }</p>
                            <img className="footer-image" src={props.footerImage}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}