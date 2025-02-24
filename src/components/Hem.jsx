import { useState } from 'react';
import './Header';
import Footer from './Footer';

export default function Hem() {

    const [showLearnMore, setShowLearnMore] = useState(false);
    const [showContactSection, setShowContactSection] = useState(false);

    const toggleLearnMore = () => {
        setShowLearnMore(!showLearnMore);
    };

    const toggleContactSection = () => {
        setShowContactSection(!showContactSection);
    };

    return (
        <>
          
            <main>
                <section id="profile">
                    <div className="section-container">
                        <div className="section__pic-container">
                            <img src="/images/profile-pic.jpg" alt="Eyosias Mamo Bild" width="300" height="300" className="profile-pic" />
                        </div>
                        <div className="section__text">
                            <h1>Välkommen till mitt Portfölj</h1>
                            <div className="combined-text">
                                <p>Hej! Jag heter Eyosias Mamo. Utforska mitt CV, projekt och mer.</p>
                                <p className="job-title"> Junior Fullstackutvecklare(.Net)</p>
                            </div>
                            <div className="btn-container">
                                <button className="btn btn-color-1" onClick={toggleLearnMore}>Läs mer</button>
                                <button className="btn btn-color-2" onClick={toggleContactSection}>Kontakta mig</button>
                            </div>
                        </div>
                    </div>
                </section>

                {showLearnMore && (
                    <section id="learn-more">
                        <h2>Läs mer</h2>
                        <p>Välkommen till &quot;Läs mer&quot;-sektionen! Här hittar du detaljerad information om min resa, färdigheter och expertis inom fullstack-utveckling. Oavsett om du utforskar mina backend-färdigheter eller min skicklighet i att bygga intuitiva användargränssnitt, får du en omfattande bild av mitt arbete och mina prestationer.</p>
                    </section>
                )}

                {showContactSection && (
                    <section id="contact-me">
                        <h2>Kontakta mig</h2>
                        <p>Om du vill komma i kontakt, använd gärna kontaktformuläret nedan eller koppla upp dig med mig via mina sociala mediekanaler.</p>
                        <form id="contact-form">
                            <label htmlFor="name">Namn</label>
                            <input type="text" id="name" name="name" placeholder="Ditt namn" required autoComplete="name" />
                            
                            <label htmlFor="email">E-post</label>
                            <input type="email" id="email" name="email" placeholder="Din e-post" required autoComplete="email" />
                            
                            <label htmlFor="message">Meddelande</label>
                            <textarea id="message" name="message" rows="5" placeholder="Ditt meddelande" required autoComplete="off"></textarea>
                            
                            <button type="submit">Skicka</button>
                        </form>
                    </section>
                )}
            </main>
            <Footer />
        </>
    );
}