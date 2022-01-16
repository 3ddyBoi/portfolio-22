import { Link } from 'react-router-dom';

const navigation = () => {
    return (
        <nav className='menu'>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/projects'>Projects</Link>
                </li>
            </ul>
        </nav>
    );
};

export default navigation;
