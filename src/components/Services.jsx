import React  from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
const Services = () => {
    return (
        <section id='services' className="services">
            <>
            <Container>   
                <h3 className='display-3 text-center mb-5'>Services</h3>
                    <>
                    <Row xs={2} md={4} className="g-4">
                        {[{title:'Conception UI Kit', image: require('../images/uikit.jpg'), description: 'Aligner la création des interfaces utilisateur en définissant des règles et composants à vos projets. Aider à regrouper dans une bibliothèque le comportement et le style de certains éléments tels que les boutons, les couleurs, les cases à cocher, les champs de formulaire, les paragraphes et les titres. '},
                        {title: 'Développement web / application web', image:require('../images/development.jpg') , "description": "Configurer  et   produire  applications Web « responsive », destinées aux utilisateurs de nouvelles technologies telles que les montres intelligentes, les tablettes, les téléphones intelligents, le commerce électronique, les objets connectés, les interfaces riches, l’intelligence artificielle, etc"},
                        {title:'Maintenance web', image:require('../images/maintenance.png'), description: 'Surveiller le trafic Web (SEO, optimisation ..), mettre à jour du contenu et la sécurisation du site.'},
                        {title:'Autres Services', image:require('../images/service.jpg'), description:`En collaboration avec Québec Biodiversité S.e.n.c. nous orons un support relatif au développement   des   aaires,   Recherche   de   Financement   auprès   des   paliers   de gouvernement fédéral et provincial, Propriété intellectuelle, Recherche – Innovation etc.`}
                        ].map((variant, idx) => (
                            <Col>
                            <Card className='card-item'>
                                <Card.Img variant="top" src={variant.image} className='embed-responsive-item' />
                                <Card.Body>
                                <Card.Title> {variant.title} </Card.Title>
                                <Card.Text>
                                {variant.description} 
                                </Card.Text>
                                </Card.Body>
                            </Card>
                            </Col>
                        ))}
                    </Row>
                    </>
            </Container>
            </>
        </section>
      );
}
 
export default Services;