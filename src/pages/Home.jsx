import { DefaultHelmet } from 'nl-ui';
import Navigation from '../components/Navigation';

import './Home.css';

import romsdalseggen1 from '../assets/images/romsdalseggen-1.jpeg';

const Home = () => {
    return (
        <div>
            <Navigation />
            <DefaultHelmet Title='Portfolio' SubTitle='Homepage' />
            <section id='home'>
                <div className='background-img'>
                    <img src={romsdalseggen1} alt='Backgroundimage' />
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
            <section id='projects'>
                <h2>Mine Prosjekter</h2>
                <div>
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
        </div>
    );
};

export default Home;
