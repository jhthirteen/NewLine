import React from 'react'
import Logo from '../../public/NewLineCropped.png'

export default function NewLineHeader() {
    return (
        <>
        <header className="header">
            <div className="logo-section">
                <img className="logo" src={Logo}></img>
            </div>
            <div className="header-right">
                <div className="nav-links">
                    <a className="nav-link" href="#">Learning Progress</a>
                    <a className="nav-link" href="#">Career Paths</a>
                    <a className="nav-link" href="#">Tech Pulse</a>
                </div>
                <div className="header-buttons">
                    <button className="btn btn-primary">
                        <span>Start Learning</span>
                    </button>
                    <button className="btn btn-secondary">
                        <span>Sign In</span>
                    </button>
                </div>
            </div>
        </header>
        </>
    )
}