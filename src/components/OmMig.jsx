import './Header';
import Footer from './Footer';

export default function OmMig () {

    return (
        <>
            <main>
                <section id="about">
                    <h1 className="title">Om Mig</h1>
                    <div className="section-container">
                        <div className="section__pic-container">
                            <img src="./images/profile-pic2.jpg" alt="Min Bild" width="300" height="300" className="about-pic" />
                        </div>
                        <div className="section__text">
                            <p className="section__text__p1">Hej, jag heter Eyosias Mamo!</p>
                            <p className="section__text__p2">Jag är passionerad för webbutveckling, IT och att skapa innovativa lösningar. Med en stark bakgrund inom utbildning och IT-support, tar jag med mig en unik blandning av erfarenhet och färdigheter till varje projekt. Jag började min professionella resa som gymnasielärare i språk, där jag finslipade mina kommunikations-, organisations- och problemlösningsförmågor under fem år. När jag övergick till IT-området, studerade jag IT Support Services och arbetade som IT Support Technician i två år på ett privat hotell. Där fick jag praktisk erfarenhet av att underhålla datorsystem, hantera hårdvara och mjukvara samt felsöka tekniska problem.</p>
                            <p>För att fördjupa min tekniska expertis studerade jag IT-support och helpdesk-operationer med specialisering inom Microsoft 365. Jag erhöll certifieringar i Microsoft 365 Fundamentals (MS-900) och Microsoft Security (SC-900), vilket förbättrade mina färdigheter inom moderna arbetsplatslösningar och IT-säkerhet.</p>
                            <p>För närvarande studerar jag ett fullstack .NET-utvecklingsprogram för att utöka min kreativitet och tekniska kapacitet. Min vision är att designa och utveckla applikationer och webbplatser som inte bara är funktionella utan också påverkar, är skalbara och användarvänliga. Med en grund inom undervisning, IT-support och nu mjukvaruutveckling, är jag driven att bygga intuitiva digitala upplevelser som gör en meningsfull skillnad, från små projekt till storskaliga lösningar.</p>
                        </div>
                    </div>

                    <div id="socials-container">
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <img src="./images/linkedin.png" alt="LinkedIn" className="icon" />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <img src="./images/github.png" alt="GitHub" className="icon" />
                        </a>
                        <a href="mailto:your.yizench8@gmail.com">
                            <img src="./images/email.png" alt="E-post" className="icon" />
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

