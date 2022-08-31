import React from 'react'
import './headline.css';

export default function Headline() {
    return(
        <div className="headline">
            <div className="headline-items">
                <h1 className="title">Looking to get started in design?</h1>
                <p className="description">
                    Our first 50 lessons have been bundled together and are available for free.
                </p>
                <button className="button">
                    Read 101 lessons
                </button>
            </div>
        </div>
    )
}