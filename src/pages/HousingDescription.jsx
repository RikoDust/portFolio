import { useParams, Navigate } from 'react-router-dom';
import Carousel from '../components/Carousel/Carousel';
import HousingDetails from '../components/HousingDetails/HousingDetails';
import data from '../../src/data/data.json';
import '../styles/main.css';


const HouseDescription = () => {
    const { id } = useParams();
    const accommodation = data.find((item) => item.id === id);
  
    if (!accommodation) {
      return <Navigate to="/404" />; // Redirection vers une route inexistante pour afficher page "notFound"
    }

    // Ajoute PUBLIC_URL uniquement aux images locales
    const formattedPictures = accommodation.pictures.map((picture) =>
      picture.startsWith('http') ? picture : `${import.meta.env.BASE_URL}/images/booki/${picture.replace(/^\/?images\/booki\//, '')}`
  );



    return (
    <div>
        <Carousel pictures={formattedPictures} />
        <HousingDetails title={accommodation.title} location={accommodation.location} 
         host={accommodation.host} tags={accommodation.tags} rating={accommodation.rating}
         description={accommodation.description} equipments={accommodation.equipments} /> 
    </div>
    );
};






export default HouseDescription;
