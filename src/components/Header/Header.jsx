import { useLocation, useNavigate } from "react-router-dom"; 

import '../Header/_header.scss';


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
        
        <nav className="nav">
            <a
                href="#accueil"
                className="nav-link"
                onClick={(e) => handleScroll(e, "accueil")}>
                Accueil
            </a>
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
            <a
                href="https://blog-pi-eight-5sppfyd7b5.vercel.app"
                className="nav-link"
                target="_blank" 
                rel="noopener noreferrer">
                Blog
            </a>
        </nav>
      </header>
    );
}

export default Header;
