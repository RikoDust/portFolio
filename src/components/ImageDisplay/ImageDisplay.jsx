import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import '../ImageDisplay/_imageDisplay.scss';



const ImageDisplay = ({ desktopPicture, mobilePicture }) => {
    const [currentPicture, setCurrentPicture] = useState(desktopPicture);

    useEffect(() => {
        // Fonction pour détecter la taille de l'écran
        const handleResize = () => {
            setCurrentPicture(window.innerWidth <= 768 ? mobilePicture : desktopPicture);
        };

        // Exécuter au chargement et lors du redimensionnement
        handleResize();
        window.addEventListener('resize', handleResize);

        // Nettoyage de l'écouteur d'événements
        return () => window.removeEventListener('resize', handleResize);
    }, [desktopPicture, mobilePicture]);

    return (
        <div className='image-display'>
            <div className='image-container'>
                <img 
                    src={currentPicture} 
                    alt="Affichage adaptatif" 
                    className="displayed-image" 
                />
            </div>
        </div>
    );
};



ImageDisplay.propTypes = {
    desktopPicture: PropTypes.string.isRequired,
    mobilePicture: PropTypes.string.isRequired,
};

export default ImageDisplay;