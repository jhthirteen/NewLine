import React from 'react'
import { FaLinkedin } from "react-icons/fa"

export default function NewLineFooter() {
    return (
        <>
        <footer className="footer-container">
            <div className="footer-wrapper">
                <footer className="footer">
                    <div className="footer-links">
                        <a className="footer-link" href="#">About</a>
                        <a className="footer-link" href="#">Contact</a>
                        <a className="footer-link" href="#">Privacy Policy</a>
                        <a className="footer-link" href="#">Terms of Service</a>
                    </div>
                    <div className="social-links">
                        <a href="#" className="social-link">
                            <div className="social-icon">
                                <FaLinkedin />
                            </div>
                        </a>
                    </div>
                    <p className="copyright">© 2024 NewLine. All rights reserved.</p>
                </footer>
            </div>
        </footer>
        </>
    )
}