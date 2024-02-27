import React from 'react';
import './contact.css';
import { BsWhatsapp, BsMailbox2, BsFacebook } from 'react-icons/bs';

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Me Contacter</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <BsMailbox2 className="contact__option-icon" />
            <h4>Email</h4>
            <h5>lucasfauresiani@gmail.com</h5>
            <a href="">Envoyer</a>
          </article>
          <article className="contact__option">
            <BsFacebook className="contact__option-icon" />
            <h4>Messanger</h4>
            <h5>lucas Siani</h5>
            <a href="">Envoyer</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>061*******</h5>
            <a href="">Envoyer</a>
          </article>
        </div>
        <form action="">
          <input type="text" name="name" placeholder="Nom, Prenom" required />
          <input type="text" name="mail" placeholder="Mail" required />
          <textarea name="message" placeholder="Message"></textarea>
          <button type="submit" className="btn btn-primary">
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
