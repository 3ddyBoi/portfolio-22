import { DefaultHelmet } from 'nl-ui';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';

const ContactPage = () => {
    return (
        <div>
            <Navigation />
            <DefaultHelmet Title='Portfolio' SubTitle='Contact' />
            <Contact />
        </div>
    );
};

export default ContactPage;
