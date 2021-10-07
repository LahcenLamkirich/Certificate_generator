import React, {useState} from 'react'
import SideBar from '../components/Sidebar' ;
import Navbar from '../components/Navbar' ;
import HomeSection from '../components/HomeSection';
import InfoSection from '../components/InfoSection/';
import { homeObjectOne, homeObjectTwo } from '../components/InfoSection/Data';
import Services from '../components/Services';
import Footer from '../components/Footer';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false) ;

    const toggle = () => {
        setIsOpen(!isOpen) ;
    }

    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/> 
            <HomeSection />
            <InfoSection {...homeObjectOne}/>
            <InfoSection {...homeObjectTwo}/>
            <Services />
            <Footer />
         
        </>
    )
}

export default Home ;
