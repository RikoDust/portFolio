
import Banner from "../components/Banner/Banner";
import CardGallery from "../components/CardGallery/CardGallery";
import Form from "../components/Form/Form";
import Presentation from "../components/Presentation/Presentation";


const Home = () => {
    return (
        <div>
            <section id="accueil" >
            <Banner />
            </section>
            <Presentation />
            <section id="projets">
            <CardGallery />
            </section>
            <section id="contact">
            <Form />
            </section>
        </div>
    );
};






export default Home;