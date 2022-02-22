import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

import '../scss/Home.scss';
import { useState } from 'react';
import scrollToElement from '../utils/scrollToElement';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { RiArrowDownSLine } from 'react-icons/ri';

const Home = () => {
    const [pageYOffsetState, setPageYOffsetState] = useState('');

    window.onscroll = () => {
        setPageYOffsetState(window.pageYOffset);
    };

    return (
        <div>
            <button
                className={
                    pageYOffsetState >= 800
                        ? 'topButton active'
                        : 'topButton'
                }
                type='button'
                onClick={() => scrollToElement('home')}
            >
                <AiOutlineArrowUp />
            </button>
            <section className='home' id='home'>
                <div className='home-background-img'>
                    <img
                        src='https://i.imgur.com/XWNSsdz.png'
                        alt='Backgroundimage'
                    />
                </div>
                <div className='home-items'>
                    <Navigation />
                    <div className='home-items-button'>
                        <button
                            onClick={() => scrollToElement('about')}
                        >
                            LES MER
                            <br />
                            <RiArrowDownSLine />
                        </button>
                    </div>
                </div>
            </section>
            <section className='about' id='about'>
                <div className='about-grid'>
                    <div className='about-grid-text'>
                        <h2>OM MEG</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Habitasse leo sit tempor
                            feugiat vulputate fames elementum.
                            Interdum eu nisi morbi turpis. Mi vel
                            amet, tellus eu elit. Ornare aliquam
                            magnis nulla ut suspendisse tempor.
                        </p>
                    </div>
                    <div className='about-grid-img'>
                        <img
                            src='https://i.imgur.com/g1EO7XH.jpg'
                            alt=''
                        />
                    </div>
                </div>
            </section>
            <section className='projects' id='projects'>
                <div className='projects-text'>
                    <h2>Mine Prosjekter</h2>
                </div>
                <div className='projects-grid'>
                    <div className='projects-grid-item'>
                        <div className='overlay' />
                        <div className='projects-grid-item-img'>
                            <img
                                src='https://i.imgur.com/tvDOpMa.png'
                                alt=''
                            />
                        </div>
                        <div className='projects-grid-item-text'>
                            <h3>Opprykkskampen</h3>
                            <dl>
                                <dt>
                                    Kategori:
                                    <dd>Webserie</dd>
                                </dt>
                                <dt>
                                    Kunde:
                                    <dd>Fønix CC / HamKam</dd>
                                </dt>
                                <dt>
                                    Arbeid:
                                    <dd>Opptak, Klipp, Farge, Lyd</dd>
                                </dt>
                            </dl>
                            <p>2021</p>
                        </div>
                    </div>
                    <div className='projects-grid-item'>
                        <div className='overlay' />
                        <div className='projects-grid-item-img'>
                            <img
                                src='https://i.imgur.com/tvDOpMa.png'
                                alt=''
                            />
                        </div>
                        <div className='projects-grid-item-text'>
                            <h3>Opprykkskampen</h3>
                            <dl>
                                <dt>
                                    Kategori:
                                    <dd>Webserie</dd>
                                </dt>
                                <dt>
                                    Kunde:
                                    <dd>Fønix CC / HamKam</dd>
                                </dt>
                                <dt>
                                    Arbeid:
                                    <dd>Opptak, Klipp, Farge, Lyd</dd>
                                </dt>
                            </dl>
                            <p>2021</p>
                        </div>
                    </div>
                    <div className='projects-grid-item'>
                        <div className='overlay' />
                        <div className='projects-grid-item-img'>
                            <img
                                src='https://i.imgur.com/tvDOpMa.png'
                                alt=''
                            />
                        </div>
                        <div className='projects-grid-item-text'>
                            <h3>Opprykkskampen</h3>
                            <dl>
                                <dt>
                                    Kategori:
                                    <dd>Webserie</dd>
                                </dt>
                                <dt>
                                    Kunde:
                                    <dd>Fønix CC / HamKam</dd>
                                </dt>
                                <dt>
                                    Arbeid:
                                    <dd>Opptak, Klipp, Farge, Lyd</dd>
                                </dt>
                            </dl>
                            <p>2021</p>
                        </div>
                    </div>
                    <div className='projects-grid-item'>
                        <div className='overlay' />
                        <div className='projects-grid-item-img'>
                            <img
                                src='https://i.imgur.com/tvDOpMa.png'
                                alt=''
                            />
                        </div>
                        <div className='projects-grid-item-text'>
                            <h3>Opprykkskampen</h3>
                            <dl>
                                <dt>
                                    Kategori:
                                    <dd>Webserie</dd>
                                </dt>
                                <dt>
                                    Kunde:
                                    <dd>Fønix CC / HamKam</dd>
                                </dt>
                                <dt>
                                    Arbeid:
                                    <dd>Opptak, Klipp, Farge, Lyd</dd>
                                </dt>
                            </dl>
                            <p>2021</p>
                        </div>
                    </div>
                    <div className='projects-grid-item'>
                        <div className='overlay' />
                        <div className='projects-grid-item-img'>
                            <img
                                src='https://i.imgur.com/tvDOpMa.png'
                                alt=''
                            />
                        </div>
                        <div className='projects-grid-item-text'>
                            <h3>Opprykkskampen</h3>
                            <dl>
                                <dt>
                                    Kategori:
                                    <dd>Webserie</dd>
                                </dt>
                                <dt>
                                    Kunde:
                                    <dd>Fønix CC / HamKam</dd>
                                </dt>
                                <dt>
                                    Arbeid:
                                    <dd>Opptak, Klipp, Farge, Lyd</dd>
                                </dt>
                            </dl>
                            <p>2021</p>
                        </div>
                    </div>
                    <div className='projects-grid-item'>
                        <div className='overlay' />
                        <div className='projects-grid-item-img'>
                            <img
                                src='https://i.imgur.com/tvDOpMa.png'
                                alt=''
                            />
                        </div>
                        <div className='projects-grid-item-text'>
                            <h3>Opprykkskampen</h3>
                            <dl>
                                <dt>
                                    Kategori:
                                    <dd>Webserie</dd>
                                </dt>
                                <dt>
                                    Kunde:
                                    <dd>Fønix CC / HamKam</dd>
                                </dt>
                                <dt>
                                    Arbeid:
                                    <dd>Opptak, Klipp, Farge, Lyd</dd>
                                </dt>
                            </dl>
                            <p>2021</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id='contact' className='contact'>
                <h2>Kontakt meg</h2>
                <div>
                    <input type='text' />
                    <input type='text' />
                    <input type='text' />
                    <input type='text' />
                    <button>Send</button>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Home;
