import React from 'react';
import '../styles/components/team-card.css';

interface TeamCardProps {
  nombre: string;
  cargo: string;
  imagen: string;
  descripcion: string;
  redesSociales?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

const TeamCard: React.FC<TeamCardProps> = ({
  nombre,
  cargo,
  imagen,
  descripcion,
  redesSociales
}) => {
  return (
    <div className="team-card">
      <div className="team-card-image">
        <img src={imagen} alt={`${nombre} - ${cargo}`} />
      </div>
      <div className="team-card-content">
        <h3 className="team-card-name">{nombre}</h3>
        <h4 className="team-card-position">{cargo}</h4>
        <p className="team-card-description">{descripcion}</p>
        
        {redesSociales && (
          <div className="team-card-social">
            {redesSociales.linkedin && (
              <a 
                href={redesSociales.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            )}
            {redesSociales.twitter && (
              <a 
                href={redesSociales.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
            )}
            {redesSociales.email && (
              <a 
                href={`mailto:${redesSociales.email}`}
                className="social-link"
                aria-label="Email"
              >
                <i className="fas fa-envelope"></i>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamCard;