
import { Helmet } from 'react-helmet';
import RoutesComponent from './RoutesComponent';
import './styles/main.css';




function App() {
  return (
    <div>
      {/* Balises meta globales */}
      <Helmet>
        <title>Portfolio Emeric Pataut</title>
        <meta name="description" content="Portfolio d'Emeric Pataut, développeur web. Découvrez mes projets et compétences." />
        <meta name="keywords" content="Portfolio, Emeric Pataut, Développeur web, projets web" />
        <meta name="author" content="Emeric Pataut" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      


      {/* Composant des routes */}
      <RoutesComponent />
    </div>
  );
}




export default App;
