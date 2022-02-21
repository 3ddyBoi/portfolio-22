import { DefaultHelmet } from 'nl-ui';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';

const App = () => {
    return (
        <div className='App'>
            <DefaultHelmet Title='Portfolio' />
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </div>
    );
};

export default App;
