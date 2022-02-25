import { Link } from 'react-router-dom';

import '../scss/Navigation.scss';
import scrollToElement from '../utils/scrollToElement';

const Navigation = () => {
    return (
        <nav className='navigation'>
            <div className='navigation-content'>
                <div className='navigation-content-logo'>
                    <h2>
                        <Link to='/'>Marcus Flaterudhagen</Link>
                    </h2>
                </div>
                <div className='navigation-content-items'>
                    <li>
                        <button onClick={() => scrollToElement('about')}>
                            About
                        </button>
                    </li>
                    <li>
                        <button onClick={() => scrollToElement('projects')}>
                            Projects
                        </button>
                    </li>
                    <li>
                        <button onClick={() => scrollToElement('contact')}>
                            Contact
                        </button>
                    </li>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
