import React from "react";
import { Container } from 'react-bootstrap';

const About = () => {
  return (
    <section id='about' className="about">
    <>
       <Container>
         <div className="row mt-3">
         <div className="col-sm-6">
           <h1 className="display-3">Qui Sommes-Nous?</h1>
         </div>
         <div className="col-sm-6">
       <p>
       Créée depuis 2016,  FM-Tech Inc.,  est   une entreprise technologique qui ore  une large gamme de services web. 
       Une équipe de professionnels du web expérimentée et dévouée à la tache travaille à la création de solutions web personnalisées 
       pour  permettre  à   ses   clients   (tous   secteurs   confondus)   d’atteindre   leurs   objectifs.   
       Et quand nous disons clients, nous le pensons vraiment !</p><p>
       Au  fil  des  ans,  nous   avons bâti   une  réputation articulée   autour  d’un  service   de qualité qui rencontre les standards 
       les plus élevés et d’un engagement sans faille qui  respecte  les   besoins et   les  exigences de   nos  clients. 
       FM-Tech apporte   de  la valeur ajoutée aux clients sur la base de la valeur de propositions que lui présente ses clients 
       pour cheminer avec eux depuis la conception jusqu’à la réalisation. C’est notre marque de commerce qui nous distingue des 
       autres fournisseurs de solutions web. Qu'il s'agisse de services offerts au secteur de l’énergie, de la santé et des finances, etc. 
       notre objectif est de fournir de la qualité.

       </p>
       </div>
       </div>
      </Container>
      </>
    </section>
  );
};

export default About;