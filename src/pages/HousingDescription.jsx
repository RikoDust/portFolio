import { useParams, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import ImageDisplay from '../components/ImageDisplay/ImageDisplay';
import HousingDetails from '../components/HousingDetails/HousingDetails';
import data from '../../src/data/data.json';
import '../styles/main.css';



const HouseDescription = () => {
    const { id } = useParams();
    const accommodation = data.find((item) => item.id === id);

    // Scroll vers le haut de la page lorsque le composant est monté
    useEffect(() => {
        window.scrollTo(0, 0);  
    }, []);

    if (!accommodation) {
        return <Navigate to="/404" />;
    }

    // Récupération des images pour desktop et mobile
    const firstPictureDesktop = accommodation.pictures && accommodation.pictures.length > 0 
      ? `/${accommodation.pictures[0]}` 
      : '';

    const firstPictureMobile = accommodation.pictures && accommodation.pictures.length > 1 
      ? `/${accommodation.pictures[1]}`  // Deuxième image si dispo
      : firstPictureDesktop; // Fallback sur la même image si pas d'image mobile



    return (
        <div>
            <HousingDetails 
                id={accommodation.id} 
                title={accommodation.title} 
                host={accommodation.host} 
                tags={accommodation.tags} 
                description={accommodation.description} 
                equipments={accommodation.equipments} 
            /> 
            <ImageDisplay 
                desktopPicture={firstPictureDesktop} 
                mobilePicture={firstPictureMobile} 
            />
        </div>
    );
};



export default HouseDescription;