import { DefaultHelmet } from 'nl-ui';
import About from '../components/About';
import Navigation from '../components/Navigation';

const AboutPage = () => {
    return (
        <div>
            <DefaultHelmet Title='Portfolio' SubTitle='About' />
            <Navigation />
            <About />
        </div>
    );
};

export default AboutPage;
