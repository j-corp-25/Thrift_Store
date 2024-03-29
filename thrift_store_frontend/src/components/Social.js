import React from "react";
import './Social.css';

const Social = () => {
    return (
        <section className='section section-title'>
            <div className="section section-title-social">Follow us on Our Socials</div>
            <div className="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-facebook-square" aria-hidden="true"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-twitter-square" aria-hidden="true"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
            </div>
        </section>
    );
}

export default Social;
