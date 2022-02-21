import { Link } from 'react-router-dom';

const Navigation = () => {
    const scrollToElement = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <nav className='navigation'>
            <div className='navigation-content'>
                <div className='navigation-logo'>
                    <h2>
                        <Link to='/'>Portfolio</Link>
                    </h2>
                </div>
                <div className='navigation-items'>
                    <li>
                        <button onClick={() => scrollToElement('home')}>
                            Home
                        </button>
                    </li>
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
