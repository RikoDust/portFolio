import { useEffect, useState } from 'react'; // useEffect enregistre les data dans projects - useState gére une liste de projet
import Card from '../Card/Card';
import '../CardGallery/_cardGallery.scss';
import data from '../../data/data.json';

const CardGallery = () => {
    const [projects, setProjects] = useState([]); 

    useEffect(() => {
        setProjects(data);
    }, []);

    return (
        <div className='project-container'>
            <h2>Mes Projets</h2>
            <div className='card-gallery'>
                {projects.map((project) => (
                    <Card key={project.id} id={project.id} title={project.title} cover={project.cover} />
                ))}
            </div>
        </div>
    );
};




export default CardGallery
