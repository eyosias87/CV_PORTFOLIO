import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Header = ({ links }) => {
    const hamburgerRef = useRef(null);
    const navLinksRef = useRef(null);

    useEffect(() => {
        const hamburger = hamburgerRef.current;
        const navLinks = navLinksRef.current;

        if (!hamburger || !navLinks) return;

        const toggleMenu = () => {
            navLinks.classList.toggle("active");
        };

        hamburger.addEventListener("click", toggleMenu);

        return () => {
            hamburger.removeEventListener("click", toggleMenu);
        };
    }, []);

    return (
        <header>
            {/* Hamburger Menu */}
            <div ref={hamburgerRef} className="hamburger">
                <div></div>
                <div></div>
                <div></div>
            </div>

            {/* Navigation */}
            <nav>
                <Link to="/" className="logo">Min Portfölj</Link>
                <ul ref={navLinksRef} className="nav-links">
                    {links && links.map(({ name, path }, index) => (
                        <li key={index}>
                            <Link to={path}>{name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

// PropTypes for type checking
Header.propTypes = {
    links: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            path: PropTypes.string.isRequired
        })
    ).isRequired
};

// Default links if none are provided as props
Header.defaultProps = {
    links: [
        { name: "Hem", path: "/" },
        { name: "Om mig", path: "/about" },
        { name: "CV", path: "/cv" },
        { name: "Portfölj", path: "/portfolio" },
        { name: "Kontakta Mig", path: "/contact" }
    ]
};

export default Header;