import { useLocation, useNavigate } from "react-router-dom"; 
import { Link } from "react-router-dom"; 
import '../Header/_header.scss';
import logo from "../../assets/logos/ep_logo.png";

function Header() {
    const location = useLocation();
    const navigate = useNavigate();

    const handleScroll = (event, sectionId) => {
        event.preventDefault();

        if (location.pathname !== "/") {
            // Redirige vers la page d'accueil avant de scroller
            navigate("/");

            // Attendre un court instant pour s'assurer que la page est bien chargée
            setTimeout(() => {
                scrollToSection(sectionId);
            }, 100); // Délai court pour permettre le rendu
        } else {
            // Si déjà sur la page d'accueil, scroller directement
            scrollToSection(sectionId);
        }
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
      <header className='header'>
        <div className='logo'>
            <img src={logo} alt="Logo_RK_studio" />
        </div>
        <nav className="nav">
            <Link
                to="/"
                className={`nav-link ${location.pathname === "/" ? "active" : ""}`}>
                Accueil
            </Link>
            <a
                href="#projets"
                className="nav-link"
                onClick={(e) => handleScroll(e, "projets")}>
                Mes projets
            </a>
            <a
                href="#contact"
                className="nav-link"
                onClick={(e) => handleScroll(e, "contact")}>
                Contact
            </a>
        </nav>
      </header>
    );
}

export default Header;
