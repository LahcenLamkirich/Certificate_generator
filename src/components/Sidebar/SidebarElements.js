import styled from 'styled-components' ; 
import { FaTimes } from 'react-icons/fa' ;
import { Link as LinkRouter} from 'react-router-dom' ;
import { Link as LinkScroll } from 'react-scroll' ;

export const SideBarContainer = styled.aside`
    position : fixed ; 
    z-index: 999 ;
    width: 100% ; 
    height: 100% ; 
    background: #0d0d0d ; 
    display: grid ; 
    align-items : center ; 
    top: 0 ; 
    left : 0 ; 
    transition : 0.3s ease-in-out ; 
    opacity : ${({ isOpen }) => (isOpen ? '100%' : '0')} ;
    top : ${({ isOpen }) => (isOpen ? '0' : '-100%')} ; 
`; 

export const CloseIcon = styled(FaTimes)`
    color : #fff ; 
`; 

export const Icon = styled.div`
    position: absolute ; 
    top: 1.2rem ; 
    right: 1.5rem ; 
    background: transparent ; 
    font-size:2rem ; 
    cursor: pointer ;
    outline : none ; 
` ;

export const SideBarWrapper = styled.div`
    color: #fff ; 
`;

export const SideBarMenu = styled.ul`
    //margin-left : 43% ;
    text-align: center ; 
    
    display : grid ; 
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 80px);


    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(4, 40px); 
    }
`;

export const SidebarLink = styled(LinkScroll)`
    display: flex ; 
    margin-left : 42.2%; 
    align-items : center;
    justify-content; center ; 
    font-size: 1.5rem ; 
    text-decoration: none ; 
    list-style; none ; 
    transition : 0.2s ease-in-out ; 
    text-decoration : none ; 
    color : #fff ; 
    cursor: pointer ; 

    &:hover {
        color : #20B2AA ; 
        transition : 0.2s ease-in-out ; 
    }
`; 


export const SideBtnWrap = styled.div`
    display : flex ; 
    justify-content : center ; 
`;

export const SideBarRoute = styled(LinkRouter)`
    border-radius : 40px ; 
    background : #20B2AA ;
    white-space : nowrap ; 
    padding : 16px 64px ; 
    color : #010606 ; 
    font-size: 16px; 
    outline : none ; 
    border: none ;
    margin-left: 12%;
    cursor : pointer;
    transition : all 0.2s ease-in-out ; 
    text-decoration: none ;

    &:hover {
        transition: all 0.2s ease-in-out ; 
        background : #fff ; 
        color : #010606 ;
    }
`;

