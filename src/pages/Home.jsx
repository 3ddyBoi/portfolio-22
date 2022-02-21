import { DefaultHelmet } from 'nl-ui';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

import './Home.scss';

import romsdalseggen1 from '../assets/images/romsdalseggen-1.jpeg';
import marcusmuskler from '../assets/images/Marcus-muskler.png'

const Home = () => {
    return (
        <div>
            <Navigation />
            <DefaultHelmet Title='Portfolio' SubTitle='Homepage' />
            <section className='home' id='home'>
                <div className='background-img'>
                    <img src={marcusmuskler} alt='Backgroundimage' />
                </div>
            </section>
            <section id='about'>
                <div>
                    <h2>Om meg</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Habitasse leo sit tempor feugiat vulputate fames
                        elementum. Interdum eu nisi morbi turpis. Mi vel amet,
                        tellus eu elit. Ornare aliquam magnis nulla ut
                        suspendisse tempor.
                    </p>
                </div>
            </section>
            <section className='projects' id='projects'>
                <h2>Mine Prosjekter</h2>
                <div className='projects-grid'>
                    <img src={romsdalseggen1} alt='' />
                    <img src={romsdalseggen1} alt='' />
                    <img src={romsdalseggen1} alt='' />
                    <img src={romsdalseggen1} alt='' />
                    <img src={romsdalseggen1} alt='' />
                    <img src={romsdalseggen1} alt='' />
                </div>
            </section>
            <section id='contact'>
                <h2>Kontakt meg</h2>
                <div>
                    <input type='text' />
                    <input type='text' />
                    <input type='text' />
                    <input type='text' />
                    <button>Submit</button>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Home;
