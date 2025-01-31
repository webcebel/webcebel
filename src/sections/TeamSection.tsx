import '../styles/sections/team.css';
import { cofounders } from '../data/team'; // Crea este archivo después

const TeamSection = () => (
  <section className="team-section">
    <div className="section-container">
      <h2>Nuestro Liderazgo Global</h2>
      <div className="team-grid">
        {cofounders.map((member) => (
          <div key={member.id} className="team-card">
            <img 
              src={`/src/assets/images/team/${member.photo}`} 
              alt={member.name} 
              className="member-photo"
            />
            <h4>{member.name}</h4>
            <p className="position">{member.position}</p>
            <p className="country">{member.country}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;