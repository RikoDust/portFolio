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
                <a href='https://github.com/RikoDust?tab=repositories' target='_blank' rel='noopener noreferrer' className='card'>
                    <img src="public/images/cover/github_card_cover.png" alt="github_card_cover" className="github_cover"></img>
                </a>
            </div>
            
        </div>
    );
};




export default CardGallery
