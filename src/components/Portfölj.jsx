import { useState } from 'react';
import './Header';
import Footer from './Footer';

export default function Portfölj () {

    const [activeModal, setActiveModal] = useState(null);

    const toggleModal = (modalId) => {
        setActiveModal(activeModal === modalId ? null : modalId);
    };

    return (
        <>
            <main>
                <section id="portfolio">
                    <h1 className="title">Min Portfölj</h1>
                    <div className="portfolio-list">
                        <div className="portfolio-item">
                            <img src="./images/projekt-1.png" alt="Projekt 1" className="portfolio-image" />
                            <h2>Bankhanteringssystem</h2>
                            <button className="modal-trigger" onClick={() => toggleModal('modal1')}>Visa mer</button>
                            {activeModal === 'modal1' && (
                                <div id="modal1" className="modal active">
                                    <div className="modal-content">
                                        <h3>Bankkonsolapp</h3>
                                        <p>Ett enkelt bankhanteringssystem byggt i C#. Denna applikation låter användare hantera bankkonton, utföra transaktioner och överföra medel med hjälp av ett kommandoradsgränssnitt. Den stöder funktioner som användarkontoskaping, insättning av medel, uttag av medel, lånetjänst, aviseringar, valutakonvertering för överföringar, etc.</p>
                                        <button className="close-modal" onClick={() => toggleModal('modal1')}>Stäng</button>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="portfolio-item">
                            <img src="./images/projekt-2.png" alt="Projekt 2" className="portfolio-image" />
                            <h2>Skoladministrationssystem</h2>
                            <button className="modal-trigger" onClick={() => toggleModal('modal2')}>Visa mer</button>
                            {activeModal === 'modal2' && (
                                <div id="modal2" className="modal active">
                                    <div className="modal-content">
                                        <h3>Skoladministrationssystem</h3>
                                        <p>Detta projekt är ett omfattande skoladministrationssystem utformat för att möta olika krav från en skola. Systemet inkluderar funktioner som:</p>
                                        <ul>
                                            <li>En meny för att visa olika data som skolan begär (Konsol)</li>
                                            <li>En översikt över all personal, inklusive namn, positioner och tjänsteår, med möjlighet att lägga till ny personal (SQL i SSMS)</li>
                                            <li>Lagring av studentinformation, klassuppgifter, betyg för varje kurs och läraren som tilldelade betyget, tillsammans med datumet (SQL i SSMS)</li>
                                            <li>Visning av antalet lärare i olika avdelningar (EF i VS)</li>
                                            <li>Visning av information om alla studenter (EF i VS)</li>
                                            <li>Listning av alla aktiva kurser (EF i VS)</li>
                                            <li>Beräkning av månatliga lönekostnader för varje avdelning (SQL i SSMS)</li>
                                            <li>Beräkning av genomsnittslönen för olika avdelningar (SQL i SSMS)</li>
                                            <li>Skapande av en lagrad procedur för att returnera viktig information om en student baserat på deras ID (SQL i SSMS)</li>
                                            <li>Tilldelning av betyg till en student med hjälp av transaktioner för att säkerställa dataintegritet (SQL i SSMS)</li>
                                        </ul>
                                        <p>Teknologier som används inkluderar SQL Server Management Studio, Visual Studio med .NET Framework, C# och scaffolding-metoder. Systemet uppfyller alla specificerade krav och ger en robust lösning för skoladministration.</p>
                                        <button className="close-modal" onClick={() => toggleModal('modal2')}>Stäng</button>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="portfolio-item">
                            <img src="./images/projekt-3.png" alt="Projekt 3" className="portfolio-image" />
                            <h2>Personlig Portföljsida</h2>
                            <button className="modal-trigger" onClick={() => toggleModal('modal3')}>Visa mer</button>
                            {activeModal === 'modal3' && (
                                <div id="modal3" className="modal active">
                                    <div className="modal-content">
                                        <h3>Personlig Portföljsida</h3>
                                        <p>En personlig portföljsida utformad för att visa upp mina färdigheter, projekt och erfarenheter. Webbplatsen inkluderar sektioner som Hem, Om mig, CV, Portfölj och Kontakt. Den har ett säkert inloggningssystem med hCaptcha-integration för att skydda mot bots och spam. Använda teknologier: HTML, CSS, JavaScript, hCaptcha, Local Storage.</p>
                                        <button className="close-modal" onClick={() => toggleModal('modal3')}>Stäng</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

