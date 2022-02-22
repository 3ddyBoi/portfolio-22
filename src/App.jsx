import { Route, Routes } from 'react-router-dom';
import './scss/App.scss';

import Home from './pages/Home';

const App = () => {
    console.log(
        '%cDeveloped by Edvard Høiby https://github.com/3ddyBoi',
        'class: console;'
    );

    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </div>
    );
};

export default App;
