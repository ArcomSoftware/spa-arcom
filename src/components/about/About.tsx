import React from 'react';
import { FaAward, FaUserTie } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import './about.css';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>A propos de Moi</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src="profil.jpeg" alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experiences</h5>
              <small>2+ ans</small>
            </article>
            <article className="about__card">
              <FaUserTie className="about__icon" />
              <h5>clients</h5>
              <small>
                Credit Agricole <br /> MEAE <br /> LapsTech{' '}
              </small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projets</h5>
              <small>
                Sagaie <br /> visa <br /> LapsTech Raspberry
              </small>
            </article>
          </div>
          <p>
            je suis actuellement en 2éme année de BTS SIO option SISR par
            correspondance. En parallèle de mes études je travail dans le
            domaine de l’informatique, La 2émme année des mes études j’ai
            travaillé en tant que technicien N1/ N2 pour la banque Crédit
            Agricole, Maintenant je travail en tant que développeur backend et
            frontend depuis un an ayant comme client final le Ministère de
            l'Europe et des affaires étrangéres, je fais également la mise en
            productions des applications sur des serveur linux, sur Azure, AWS.
          </p>
          <a href="#contact" className="btn btn-primary">
            contact
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
