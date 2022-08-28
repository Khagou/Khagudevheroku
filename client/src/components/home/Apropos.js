import React from "react";

const Apropos = () => {
  return (
    <div className="AproposArea">
      {/* Les images importe avec balises img sont accessible depuis public */}
      <img src="./images/isolated-g01e498436_1920.png" alt="devops-circle" />
      <div className="Apropos" id="Apropos">
        <h4>A propos de moi</h4>
        <p>
          Récemment diplomé d'un titre pro Développeur Web et Web Mobile obtenu
          au prêt de M2I Formation, je dispose cependant déjà d'une certaine
          autonomie obtenue par la réalisation de projets seul.
        </p>
        <p>
          En effet, je dispose actuellement d'une petite expérience en
          développement web sur des technologies tels que par exemple PHP et
          MySQL que j'ai eux l'occasion d'étudier lors de ma formation et de
          mettre en pratique lors de mon stage réalisé en autonomie. Ou encore
          ReactJS, NodeJS et MongoDB que j'ai appris en autonomie lors de la
          création de mon portfolio que vous visitez actuellement.
        </p>
        <p>
          Actuellement entrain de travailler sur des compétences pour le
          déploiement et l'administration sur des outils comme Proxmox, Truenas
          et NextCloud que j'ai mis en place sur mon serveur personnel pour
          stocker et partager des données. Ou encore Nginx et Docker que
          j'essayes actuellement afin déployer mon site. Ce qui m'amène à ce
          jour à rechercher un contrat de professionnalisation pour une
          formation d'administrateur système DevOps dans le but de travailler
          sur ces skills au sein d'une équipe et de mettre le tout en pratique
          dans un cadre professionnel.
        </p>
      </div>
    </div>
  );
};

export default Apropos;
