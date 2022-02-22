import React from 'react';

import { AiFillInstagram } from 'react-icons/ai';
import { FaTwitch, FaYoutube } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';

const Footer = () => {
    return (
        <footer id='footer' className='footer'>
            <div className='footer-content'>
                <div className='footer-content-socials'>
                    <AiFillInstagram />
                    <FaTwitch />
                    <FaYoutube />
                    <BsLinkedin />
                </div>
                <div className='footer-content-contact'>
                    <h3>Marcus Flaterudhagen</h3>
                    <a href='mailto:example@mail.com'>
                        example@mail.com
                    </a>
                    <a href='tel:+4747654146'>+47 476 54 146</a>
                </div>
                <div className='plugs'>
                    <h3>Developed by Edvard Høiby</h3>
                    <h3>Designed by Marcus Flaterudhagen</h3>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
