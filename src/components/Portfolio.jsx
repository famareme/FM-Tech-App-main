
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'


const Porfolio = () => {
    return (  
        <Container>
            <section className="portfolio" id="portfolio">
                <h3 className='display-3 text-center mb-5'>Réalisations</h3>
                    <Row xs={2} md={2} className="g-2">
                        {[{title:'Vidéotron', image: require('../images/videotroncoulanglaislogo.png'), description: 'Mise à jour de composantes UIKIT et l’intégration de templates et de pages utilisant ces composantes.'},
                        {title: 'Ciena', image:require('../images/ciena.png') , description: 'Développer des applications web qui traitent, analysent et visualisent les données des équipements réseaux avec les librairies Chart Js, Vis Js'},
                        {title:'Desjardins', image:require('../images/desjardins.png'), description: 'Conception d\'application qui permet de gérer, surveiller et contrôler les transactions des particuliers ou autres sociétés de gestion de patrimoine afin de proposer des services de clientèle, des fonctions administratives et des meilleurs forfaits.'},
                        {title:'SNC-Lavalin', image:require('../images/SNC-Lavalin.png'), description:'Participer au développement des contenus de formation en ligne pour les ingénieurs et technicien de SNC-Lavalin'},
                        {title:'CIUSSE', image:require('../images/ciusse.jpg'), description:'Moderniser le système de santé informatisé et centralisé. Il s’agit des notes de votre dossier compilées dans un ordinateur par votre médecin lors d\'une visite à l\'hôpital ou à la clinique.'},
                        {title:'Karavaniers', image:require('../images/karavaniers.jpg'), description:'Gestion et mise à jour de la plateforme pour les découvertes et voyages organisées. Intégration, mise en forme du contenu, et mise à jour des données des sites'},
                        {title:'Seneweb', image:require('../images/seneweb.png'), description:'Gérer le site d\'informations pour la diffusions de contenu. Concevoir les sites pour les clienst de l\'entreprise'},
                        {title:'Dakar Biodiversite', image:require('../images/DB-logo.png'), description:'Gérer le site d\'informations pour la diffusion de contenu. Concevoir les sites pour les clients de l\'entreprise'},
                        {title:'IRSST', image:require('../images/IRSST.png'), description:'Refonte du site de l\'IRSST'},
                        ].map((variant, idx) => (
                            <Col>
                            {/* <Card className='h-100 text-white bg-secondary'>
                                <Card.Img variant="top" src={variant.image} className='embed-responsive-item w-50 mx-auto mt-3' />
                                <Card.Body>
                                <Card.Title> {variant.title} </Card.Title>
                                <Card.Text>
                                {variant.description} 
                                </Card.Text>
                                </Card.Body>
                            </Card> */}
                            <div class="alert alert-secondary note h-100" role="alert">
                            <img src={variant.image}  alt={variant.title} class='float-start w-25 me-2'/>
                            <p>{variant.description}</p>
                            </div>
                            </Col>
                        ))}
                    </Row>
                    
            </section>
        </Container>
    );
}
 
export default Porfolio;