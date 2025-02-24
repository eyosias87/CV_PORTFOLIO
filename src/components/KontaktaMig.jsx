import './Header';
import Footer from './Footer';

export default function KontaktaMig () {
    
    return (
        <div>
            <main>
                <section id="contact">
                    <h1>Kontakta Mig</h1>
                    <p>Om du har några frågor, tveka inte att kontakta mig via formuläret nedan:</p>

                    <form action="https://api.web3forms.com/submit" method="POST">
                        {/* Replace with your Access Key */}
                        <input type="hidden" name="access_key" value="3b5f085f-fe11-46f8-963d-5b4e4ad7ded1" />

                        {/* Form Inputs. Each input must have a name="" attribute */}
                        <div className="form-group">
                            <label htmlFor="name">Namn</label>
                            <input type="text" id="name" name="name" placeholder="Ditt Namn" required autoComplete="name" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">E-post</label>
                            <input type="email" id="email" name="email" placeholder="Din E-post" required autoComplete="email" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Meddelande</label>
                            <textarea id="message" name="message" rows="5" placeholder="Ditt Meddelande" required autoComplete="off"></textarea>
                        </div>

                        {/* Honeypot Spam Protection */}
                        <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                        {/* Custom Confirmation / Success Page */}
                        {/* <input type="hidden" name="redirect" value="https://mywebsite.com/thanks.html"> */}

                        <button type="submit">Skicka Formulär</button>
                    </form>
                </section>
            </main>
            <Footer />
        </div>
    );
}

