import PropTypes from 'prop-types'; // Importation des Proptypes pour validation des props
import '../HousingDetails/_housingDetails.scss';

import Accordion from '../Accordion/Accordion';



const HousingDetails = ({ title, tags, description, equipments }) => {

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
                    
                    
                </div>
            </div>
            <div className='housing-accordions'>
                        <Accordion title='Description du projet' content={description} />
                        <Accordion title='Compétences deployées' content={ <ul>{equipments.map((item, index) => (
                            <li key={index}>{item}</li>
                        ) )}</ul> } />
            </div>
        </div>
    );
};




HousingDetails.propTypes = {
    title: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    host: PropTypes.shape({
        name: PropTypes.string,
        picture: PropTypes.string,
    }),
    description: PropTypes.string.isRequired,
    equipments: PropTypes.arrayOf(PropTypes.string).isRequired,
  };




export default HousingDetails
