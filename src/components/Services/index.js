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
                        <ServicesH2>Reduce Expenses</ServicesH2>
                        <ServicesP>this is the resuce file to use in our ptoject </ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={icon2} />
                        <ServicesH2>Reduce Expenses </ServicesH2>
                        <ServicesP>this is the resuce file to use in our ptoject </ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={icon3} />
                        <ServicesH2>Reduce Expenses</ServicesH2>
                        <ServicesP>this is the resuce file to use in our ptoject </ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
        </>
    )
}

export default Services
