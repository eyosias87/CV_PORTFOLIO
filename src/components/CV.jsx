import './Header';
import cvData from '../data/cv-data.json';

export default function CV() {
  return (
    <main>
      <section id="cv">
        <h1 className="title">Curriculum Vitae</h1>

        {/* Utbildning */}
        <div className="section-container">
          <h2>Utbildning</h2>
          <ul>
            {cvData.education.map((edu, index) => (
              <li key={index}>
                <strong>{edu.school}</strong> - {edu.degree} ({edu.year})
              </li>
            ))}
          </ul>
        </div>

        {/* Arbetslivserfarenhet */}
        <div className="section-container">
          <h2>Arbetslivserfarenhet</h2>
          <ul>
            {cvData.workExperience.map((work, index) => (
              <li key={index}>
                <strong>{work.company}</strong> - {work.role} ({work.year})
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}