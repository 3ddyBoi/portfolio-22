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
        </div>
    );
};

export default Home;
