import 'react';
import swedenFlag from '/images/sweden-flag-icon.png'; // Adjust the path as necessary

const Footer = () => {
    return (
        <footer>
            <p>&copy; 2025 Mitt Portfolio. Alla rättigheter förbehållna. Stockholm, Sverige <img src={swedenFlag} alt="Swedish Flag" width="20" height="20" className="flag-icon" /></p>
        </footer>
    );
};

export default Footer;