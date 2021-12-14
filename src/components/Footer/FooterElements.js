import styled from 'styled-components' ;
import {Link} from 'react-router-dom' ;
import { Link as LinkScroll } from 'react-scroll' ;

export const FooterContainer = styled.footer` 
    // background-color : #101522 ; 
    background-color : #fff ; 
`; 

export const FooterWrap = styled.div`
    padding : 48px 24px ; 
    display : flex ; 
    flex-direction : column ; 
    justify-content : center ; 
    align-items : center ; 
    max-width : 1100px ; 
    margin: 0 auto ; 
`; 

export const FooterLinksContainer = styled.div`
    display : flex ; 
    justify-content : center ; 

    @media screen and (max-width : 820px) {
        padding-top: 32px;
    }
` ; 

export const FooterLinksWrapper = styled.div`
    // display : flex ; 

    @media screen and (max-width : 820px) {
       flex-direction : row ;
    }
` ;


export const FooterLinkItems = styled.div`
    display : flex ; 
    flex-direction : column ; 
    align-items : flex-start ; 
    margin: 16px; 
    text-align : left ; 
    width : 160px; 
    box-sizing : border-box ; 
    // color : #fff ; 
    color : black ;
    @media screen and (max-width : 820px) {
        margin : 0; 
        padding : 10px ;
        width : 100% ;
    }
` ;

export const FooterLinkTitle = styled.h1`
    font-size : 14px ; 
    margin-bottom : 16px ; 
` ; 

export const FooterLink = styled(Link)`
    color : #fff ; 
    text-decoration : none ; 
    margin-bottom : 0.5rem ; 
    font-size : 14px ; 

    &:hover {
        color : #20B2AA; 
        transition : 0.1s ease-in-out ; 
    }
`;

export const SocialMedia = styled.section`
   max-width : 1000px ; 
   width : 100% ;   
` ; 

export const SocialMediaWrap = styled.div`
    display : flex ; 
    justify-content : space-between ; 
    align-items : center ; 
    max-width : 1100px; 
    margin: 40px auto 0 auto ; 

    @media screen and (max-width: 820px) {
        flex-direction : column ; 
    }
` ; 

export const SocialLogo = styled(Link)` 
    color : black ;
    justify-self : start ; 
    cursor : pointer ; 
    text-decoration : none ; 
    font-size : 1.5rem ; 
    display : flex ; 
    align-items : center ; 
    margin-bottom : 16px ;
    font-weight : bold ; 
    margin-top: 10px;
    &:hover {
        color : #20B2AA ;
        text-decoration : underline ;
    }
` ; 

export const WebsiteRights = styled.small`
    color : #fff; 
    color : black ;
    margin-bottom : 16px;    
    color : black ;
    margin-left : 25px ;
    margin-top : -80px;
    text-shadow: 0px 1px black;
` ; 

export const SocialIcons = styled.div`
    display: flex ;
    justify-content : space-between ; 
    align-items : center ; 
    width : 240px ;    
    
` ;

export const SocialIconLink = styled.a`
    color: black ;
    margin-top:12%;
    font-size : 24px ; 
    &:hover {
        color : #20B2AA ;
    }
` ; 

export const NavLinks = styled(LinkScroll)`
    color: black ; 
    display: flex ; 
    align-items: center ; 
    text-decoration: none ; 
    padding: 0 1rem ; 
    height: 100% ; 
    cursor: pointer ;

    &.active {
        border-bottom: 3px solid #01bf71;
    }
    &:hover {
        color : #20B2AA ;
    }
` ;




