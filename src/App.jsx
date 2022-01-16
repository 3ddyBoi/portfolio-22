import { DefaultHelmet } from 'nl-ui';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProjectsPage from './pages/ProjectsPage';

const App = () => {
    return (
        <div className='App'>
            <DefaultHelmet Title='Portfolio' />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/projects' element={<ProjectsPage />} />
                <Route path='/contact' element={<ContactPage />} />
            </Routes>
        </div>
    );
};

export default App;
