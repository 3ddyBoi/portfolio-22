import { Link } from 'react-router-dom';

const navigation = () => {
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
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/projects'>Projects</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </div>
            </div>
        </nav>
    );
};

export default navigation;
