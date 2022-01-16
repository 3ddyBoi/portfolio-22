import { DefaultHelmet } from 'nl-ui';
import Navigation from '../components/Navigation';
import Projects from '../components/Projects';

const ProjectsPage = () => {
    return (
        <div>
            <DefaultHelmet Title='Portfolio' SubTitle='Projects' />
            <Navigation />
            <Projects />
        </div>
    );
};

export default ProjectsPage;
