import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'; // Import Header component
import Hem from './components/Hem';
import OmMig from './components/OmMig';
import CV from './components/CV';
import Portfölj from './components/Portfölj';
import KontaktaMig from './components/KontaktaMig';
import './index.css';

export default function App() {

    return (
        <Router>
            {/* Header component is used here */}
            <Header 
                links={[
                    { name: "Hem", path: "/" },
                    { name: "Om mig", path: "/about" },
                    { name: "CV", path: "/cv" },
                    { name: "Portfölj", path: "/portfolio" },
                    { name: "Kontakta Mig", path: "/contact" }
                ]} 
            />

            {/* Routes for the pages */}
            <Routes>
                <Route path="/" element={<Hem />} />
                <Route path="/about" element={<OmMig />} />
                <Route path="/cv" element={<CV />} />
                <Route path="/portfolio" element={<Portfölj />} />
                <Route path="/contact" element={<KontaktaMig />} />
            </Routes>
        </Router>
    );
}

