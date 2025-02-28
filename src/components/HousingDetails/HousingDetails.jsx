import PropTypes from 'prop-types';
import '../HousingDetails/_housingDetails.scss';
import Accordion from '../Accordion/Accordion';



// Mapping des IDs aux liens GitHub et sites en ligne
const projectLinks = {
    "c67ab8a7": {
        repo: "https://github.com/RikoDust/Site_Booki",
        website: "https://rikodust.github.io/Site_Booki/"
    },
    "b9123946": {
        repo: "https://github.com/RikoDust/Site_Oh_My_Food",
        website: "https://rikodust.github.io/Site_Oh_My_Food/"
    },
    "46d188c5": {
        repo: "https://github.com/RikoDust/Site_Print_It",
        website: "https://rikodust.github.io/Site_Print_It/"
    },
    "0979876d": {
        repo: "https://github.com/RikoDust/Site_Sophie_Bluel_Architecte",
        website: ""
    },
    "f72a452f": {
        repo: "https://github.com/RikoDust/Site_Kasa",
        website: "https://sitekasa.vercel.app/"
    }
};



const HousingDetails = ({ id, title, tags, description, equipments }) => {
    return (
        <div className='housing-details'>
            <div className='housing-header'>
                <div className='header-left'>
                    <h2 className='housing-title'>{title}</h2>
                    <div className='tags'>
                        {tags.map((tag, index) => (
                            <span key={index} className="tag">{tag}</span>
                        ))}
                    </div>
                </div>
                <div className='header-right'>
                    {projectLinks[id] && (
                        <div className="links-container">
                            {/* Lien vers le Repository */}
                            <a href={projectLinks[id].repo} target="_blank" rel="noopener noreferrer" className="project-link">
                                <i className="fa-brands fa-github"></i>
                                <span>Repository</span>
                            </a>
                            {/* Lien vers le Site Web */}
                            <a href={projectLinks[id].website} target="_blank" rel="noopener noreferrer" className="project-link">
                                <i className="fa-solid fa-globe"></i>
                                <span>Website</span>
                            </a>
                        </div>
                    )}
                </div>
            </div>
            <div className='housing-accordions'>
                <Accordion title='Description du projet' content={description} />
                <Accordion title='Compétences déployées' content={
                    <ul>
                        {equipments.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                } />
            </div>
        </div>
    );
};




HousingDetails.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
    equipments: PropTypes.arrayOf(PropTypes.string).isRequired,
};





export default HousingDetails;
