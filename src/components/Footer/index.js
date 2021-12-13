import React from 'react'
import {FooterContainer,FooterWrap,FooterLinksContainer,FooterLinksWrapper,FooterLinkItems,FooterLinkTitle,FooterLink,SocialMedia,SocialMediaWrap,SocialLogo,WebsiteRights,SocialIcons,SocialIconLink, NavLinks} from './FooterElements' 
import { FaGithub, FaYoutube, FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa'
import { render } from 'react-dom'


const Footer = () => {
        return (
        <FooterContainer id="contact">
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo>
                            <NavLinks to='home'>
                                JCI KENITRA 
                            </NavLinks>
                        </SocialLogo>
                        <WebsiteRights> JCI &copy; 2021 All Rights Reserved </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="//www.facebook.com/JCIKenitra" target="_blank" aria-label="Facebook">
                                 <FaFacebook /> 
                            </SocialIconLink>
                            <SocialIconLink href="//www.instagram.com/jci.kenitra/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="//www.youtube.com/channel/UCGPBd_7bTASls4ocpmvh3OA" target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="//www.linkedin.com/in/jci-kenitra-b187a2213/?originalSubdomain=ma" target="_blank" aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>

                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )

}

export default Footer ;
