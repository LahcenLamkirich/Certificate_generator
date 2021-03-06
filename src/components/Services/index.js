import React from 'react'
import {ServicesContainer,ServicesH1,ServicesWrapper,ServicesCard,ServicesIcon,ServicesH2,ServicesP } from './ServicesElements' ; 
import icon1 from '../../images/svg-1.svg' ;
import icon2 from '../../images/svg-2.svg' ;
import icon3 from '../../images/svg-5.svg' ;
const Services = () => {
    return (
        <>
            <ServicesContainer id="services">
                <ServicesH1>Our Services</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={icon1} />
                        <ServicesH2> Développement individuel </ServicesH2>
                        <ServicesP> </ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={icon2} />
                        <ServicesH2> Communautaire </ServicesH2>
                        <ServicesP> </ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={icon3} />
                        <ServicesH2> Relations internationales </ServicesH2>
                        <ServicesP> </ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
        </>
    )
}

export default Services
