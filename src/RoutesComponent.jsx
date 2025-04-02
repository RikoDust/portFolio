import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

// Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// Pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import HouseDescription from "./pages/HousingDescription";




function RoutesComponent() {
    return(
        <Router>
            <div className="main-container">
                <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/project/:id" element={<HouseDescription />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                    <Footer />
                    </div>
                
        </Router>
    );
}






export default RoutesComponent;
