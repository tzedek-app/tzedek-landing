import React from 'react';
import './Footer.css';

export default Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>Tzedek</h4>
                    <p>AI-driven platform for legal and civil rights</p>
                </div>
                <div className="footer-section">
                    <h4>Links</h4>
                    <a href="https://github.com/tzedek-app/tzedek">GitHub</a>
                </div>
                <div className="footer-section">
                    <h4>Contact</h4>
                    <a href="mailto:mishabor2367@gmail.com">mishabor2367@gmail.com</a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {currentYear} Tzedek</p>
            </div>
        </footer>
    );
};
