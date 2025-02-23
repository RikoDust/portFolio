import PropTypes from 'prop-types';
import '../ImageDisplay/_imageDisplay.scss';




const ImageDisplay = ({ picture }) => {
    return (
        <div className='image-display'>
            <div className='image-container'>
                <img 
                    src={picture} 
                    alt="Affichage fixe" 
                    className="displayed-image" 
                />
            </div>
        </div>
    );
};





ImageDisplay.propTypes = {
    picture: PropTypes.string.isRequired,
};

export default ImageDisplay;