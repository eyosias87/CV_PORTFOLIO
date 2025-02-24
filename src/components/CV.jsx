import './Header';
import Footer from './Footer';

const CV = () => {
    return (
        <>
          
            <main>
                <section id="cv">
                    <h1 className="title">Curriculum Vitae</h1>

                    <div className="section-container">
                        <h2>Personliga Uppgifter</h2>
                        <ul>
                            <li>
                                <p><strong>Namn:</strong> Eyosias Abera Mamo</p>
                                <p><strong>Telefon:</strong> +46738061663</p>
                                <p><strong>E-post:</strong> yizench8@gmail.com</p>
                                <p><strong>Adress:</strong> 6 Ardennergatan, Upplands Väsby, Stockholm</p>
                                <p><strong>Yrke:</strong> Junior Fullstack Developer</p>
                            </li>
                        </ul>
                    </div>

                    <div className="section-container">
                        <h2>Erfarenhet</h2>
                        <ul>
                            <li>
                                <strong>Jan 2024 &ndash; Feb 2024:</strong> Första Linjens IT Support Intern - <em>Lexikon Support AB, Stockholm</em>
                                <p>Erbjöd IT-supporttjänster som en del av en praktisk praktik.</p>
                            </li>
                            <li>
                                <strong>Jan 2021 &ndash; Feb 2022:</strong> IT-tekniker - <em>Dell Software and Hardware Maintenance, Addis Ababa, Etiopien</em>
                                <p>Installerade, konfigurerade och underhöll datorer, servrar, skrivare och annan hårdvara.</p>
                            </li>
                            <li>
                                <strong>Okt 2016 &ndash; Okt 2021:</strong> IT Support/Systemadministratör - <em>SoloTe International Hotel, Addis Ababa, Etiopien</em>
                                <p>Tjänstgjorde som systemadministratör och helpdesk-tekniker, löste IT-problem och underhöll system.</p>
                            </li>
                        </ul>
                    </div>

                    <div className="section-container">
                        <h2>Utbildning</h2>
                        <ul>
                            <li>
                                <strong>Sep 2023 &ndash; Nuvarande:</strong> Fullstack Developer - <em>Chas Academy, Stockholm</em>
                            </li>
                            <li>
                                <strong>Sep 2023 &ndash; Jan 2024:</strong> IT Support Technician - <em>Lexicon IT-Proffs, Stockholm</em>
                            </li>
                            <li>
                                <strong>Sep 2018 &ndash; Aug 2019:</strong> IT Support Services - <em>Andinet International College, Addis Ababa, Etiopien</em>
                            </li>
                        </ul>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default CV;