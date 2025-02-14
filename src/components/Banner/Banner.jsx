import PropTypes from "prop-types";
import '../Banner/_banner.scss';

const Banner = ({ image, text = null }) => { 
    return (
      <div className="banner">
        <img src={image} alt={text} className="banner-img"/>
        {text && <h1>{text}</h1>} 
      </div>
    );
  };
  
  Banner.propTypes = {
    image: PropTypes.string.isRequired, // image doit être une chaîne de caractères
    text: PropTypes.string,
  };




export default Banner