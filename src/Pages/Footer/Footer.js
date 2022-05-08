import React from 'react';
import '../Footer/Footer.css'
import facebook from '../../images/footer/facebook-brands.svg';
import twitter from '../../images/footer/twitter-square-brands.svg';
import instagram from '../../images/footer/instagram-square-brands.svg';
import linkedin from '../../images/footer/linkedin-brands.svg';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <div className=' footer-body mt-5'>
            <h3 className='text-center'>CarGarageBD.com</h3>
            <div className='mx-auto d-flex justify-content-center links'>
                <a className='me-3 text-decoration-none' href="/">HOME</a>
                <a className='me-3 text-decoration-none' href="/about">ABOUT</a>
                <a className='me-3 text-decoration-none' href="/blogs">BLOG</a>
                <a className='me-3 text-decoration-none' href="/contact">CONTACT</a>
            </div>
            <div className='mx-auto d-flex justify-content-center my-3'>
                <a href="https://www.facebook.com/"><img className='me-3' src={facebook} style={{ width: 30 }} alt="" /></a>
                <a href="https://www.twitter.com"><img className='me-3' src={twitter} style={{ width: 30 }} alt="" /></a>
                <a href="https://www.instagram.com"><img className='me-3' src={instagram} style={{ width: 30 }} alt="" /></a>
                <a href="https://www.linkedin.com"><img className='me-3' src={linkedin} style={{ width: 30 }} alt="" /></a>
            </div>
            <p className='text-center'>Copyright <FontAwesomeIcon icon={faCopyright} /> 2022. All rights reserved.</p>
        </div>
    );
};

export default Footer;