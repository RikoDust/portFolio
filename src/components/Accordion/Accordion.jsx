import PropTypes from 'prop-types';
import '../Accordion/_accordion.scss';




const Accordion = ({ title, content }) => {
    return (
        <div className='accordion fixed'>
            <div className='accordion-header'>
                <h3>{title}</h3>
            </div>
            <div className='accordion-content open'>{content}</div>
        </div>
    );
};



// Validation des propriétés
Accordion.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.node.isRequired
};



export default Accordion;