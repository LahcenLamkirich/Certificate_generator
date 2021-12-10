import React from 'react' ;
import {SideBarContainer,CloseIcon,Icon, SideBarWrapper,SidebarLink, SideBarRoute, SideBtnWrap, SideBarMenu  } from './SidebarElements' ;

const Sidebar = ({isOpen , toggle}) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SidebarLink to="about" onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to="discover" onClick={toggle}>
                        Discover
                    </SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>
                        Services
                    </SidebarLink>
                </SideBarMenu>
                <SideBtnWrap>
                    <SideBarRoute to="/signin"> Sign In </SideBarRoute>
                </SideBtnWrap>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default Sidebar ;
