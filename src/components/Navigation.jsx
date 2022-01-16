import { Link } from 'react-router-dom';

const navigation = () => {
    return (
        <nav className='menu'>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
            </ul>
        </nav>
    );
};

export default navigation;
