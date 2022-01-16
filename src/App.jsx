import { DefaultHelmet } from 'nl-ui';
import './App.css';
import Navigation from './components/Navigation';

const App = () => {
    return (
        <div className='App'>
            <DefaultHelmet Title='Portfolio' SubTitle='Homepage' />
            <Navigation />
            <h1>Portfolio</h1>
        </div>
    );
};

export default App;
