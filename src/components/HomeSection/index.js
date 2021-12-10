import React, {useState} from 'react' ; 
import Video from '../../vedeo/video.mp4' ;
import {Button} from '../ButtonElements' ;
import {
    HeroContainer,
    HeroBg, 
    VedeoBg, 
    HeroH1,
    HeroP,
    HeroContent, 
    HeroBtnWrapper, 
    Arrowforward, 
    ArrowRight} from './HomeElements' ;

const HomeSection = () => {
    const [hover, setHover] = useState(false) ;

    const onHover = () => {
        setHover(!hover) ;
    }
    return (
        <HeroContainer id="home">
            <HeroBg>
                <VedeoBg autoPlay loop muted src={Video} type="video/mp4" />
            </HeroBg>
            <HeroContent>
                <HeroH1>
                JCI Kenitra "Jeune Chambre internationale"
                </HeroH1>
                <HeroP>
                Nous sommes de jeunes citoyens actifs partout dans le monde. Vivre, communiquer, agir et créer un impact dans nos communautés. Vous êtes un jeune citoyen actif ? Voulez-vous faire une différence dans votre communauté? Rejoignez-nous dans ce voyage d'action locale pour un impact mondial.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="/signin" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
                        Commencer {hover ? <Arrowforward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
        
    )
}

export default HomeSection
