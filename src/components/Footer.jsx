import React from 'react';

import '../scss/Footer.scss';

import { ReactComponent as FooterWave } from '../assets/svg/footer-wave.svg';

import { AiFillInstagram } from 'react-icons/ai';
import { FaTwitch, FaYoutube } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';

const Footer = () => {
    return (
        <footer id='footer' className='footer'>
            <FooterWave className='footer-wave' />
            <div className='footer-content'>
                <div className='footer-content-socials'>
                    <a
                        className='footer-content-socials-icon'
                        href='https://www.instagram.com/marcusflaterudhagen0/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <AiFillInstagram />
                    </a>
                    <a
                        className='footer-content-socials-icon'
                        href='https://www.twitch.tv/murkesrl'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <FaTwitch />
                    </a>
                    <a
                        className='footer-content-socials-icon'
                        href='https://www.youtube.com/c/MarcusFlaterudhagen/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <FaYoutube />
                    </a>
                    <a
                        className='footer-content-socials-icon'
                        href='https://www.linkedin.com/in/marcusflaterudhagen/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <BsLinkedin />
                    </a>
                </div>
                <div className='footer-content-contact'>
                    <h3>Marcus Flaterudhagen</h3>
                    <div className='footer-content-contact-types'>
                        <a href='mailto:example@mail.com'>
                            example@mail.com
                        </a>
                        <span></span>
                        <a href='tel:+4747654146'>+47 476 54 146</a>
                    </div>
                </div>
                <div className='footer-content-plugs'>
                    <h3>Developed by Edvard Høiby</h3>
                    <h3>Designed by Marcus Flaterudhagen</h3>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
