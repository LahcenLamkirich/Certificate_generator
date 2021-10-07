import React from 'react' ;
import { FaBars } from 'react-icons/fa' ;
import { Nav, NavbarContainer, NavLogo, MobileIcon,NavBtn, NavBtnLink  } from './navAdminElements' ;

// This is the component of the navBar : 

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo > JCI KENITRA</NavLogo> 
                    <MobileIcon onClick={toggle}> 
                        <FaBars /> 
                    </MobileIcon>
                    <NavBtn>
                        <NavBtnLink to='/'>Log Out</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar ;
