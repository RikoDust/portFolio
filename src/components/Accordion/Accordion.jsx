import { useState } from 'react'; // Gere l'état des accordéons ouvert ou fermé
import PropTypes from 'prop-types';
import '../Accordion/_accordion.scss';
import arrowIcon from "../../assets/icons/accordion_arrow.png";

const Accordion = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className='accordion'>
            <div className='accordion-header'>
                <h3>{title}</h3>
                <div className={`arrow ${isOpen ? 'open' : ''}`} 
                style={{ backgroundImage: `url(${arrowIcon})`}}
                onClick={toggleAccordion}></div>
            </div>
            <div className={`accordion-content ${isOpen ? 'open' : ''}`}>{content}</div>
        </div>
    );
};



// Validation des propriétés
Accordion.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.node.isRequired
};



export default Accordion;