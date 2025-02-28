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
    window.scrollTo(0, 0);  // Faire défiler la page vers le haut
}, []); // [] s'assure qu'il ne s'exécute qu'une seule fois au montage



    if (!accommodation) {
        return <Navigate to="/404" />;
    }
   

    // Récupération de la première image locale
    const firstPicture = accommodation.pictures && accommodation.pictures.length > 0 
      ? `/${accommodation.pictures[0]}`
      : '';

      
    // console.log('Image affichée:', firstPicture);

 


    return (
        <div>
            <ImageDisplay picture={firstPicture} />
            <HousingDetails 
                id={accommodation.id} 
                title={accommodation.title} 
                host={accommodation.host} 
                tags={accommodation.tags} 
                description={accommodation.description} 
                equipments={accommodation.equipments} 
            /> 
        </div>
    );
};





export default HouseDescription;

