import classes from './Dashboard.module.css';
import Projects from '../Projects/Projects';
import AboutPage from '../About/AboutPage';
import NavLinkIcons from '../NavLinks/NavLinkIcons';
import Technologie from '../Technologie/Technologie';
import Contact from '../Contact/Contact';


import { TiArrowSortedUp } from "react-icons/ti";
import { useState } from 'react';

import { IoHome } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaSitemap } from "react-icons/fa6";
import { MdPermContactCalendar } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { MdDeveloperMode } from "react-icons/md";
import { BiSolidShow } from "react-icons/bi";
import { IoEyeOff } from "react-icons/io5";

export default function Dashboard(){
  const [selectedContent, setSelectedContent] = useState(<AboutPage/> );
  const [hideDashboard, setHideDachboard] = useState(false);
  const [activeButton, setActiveButton] = useState('about');
  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  const HomePage = ()=>{
    navigate('/');
  }


  function handleContent(selectedPage, buttonName){
    setSelectedContent(selectedPage);
    setActiveButton(buttonName);
  } 

  return(
    <>
    
      <section id={classes.main}>
        
        <div className={classes.dashboard} id={hideDashboard ? classes.dashboard_hide : classes.dashboard_displaying}>
               
            <div className={classes.boxImg}>
                <img src="me.png" alt="cisse Mohamed" />
            </div>

              <TiArrowSortedUp className={classes.arrowLeft} onClick={()=> setHideDachboard(true)} size={50} />
              

            <nav>
                <ul>
                    <button className={activeButton === 'home' ? classes.active : ''} onClick={() => { HomePage(); setActiveButton('home', setHideDachboard(true)) }}>Accueil <IoHome className={classes.icon} /></button>
                    <button className={activeButton === 'about' ? classes.active : ''} onClick={() => handleContent(<AboutPage />, 'about', setHideDachboard(true))}>Qui suis-je <FaUser className={classes.icon} /></button>
                    <button className={activeButton === 'projects' ? classes.active : ''} onClick={() => handleContent(<Projects />, 'projects', setHideDachboard(true))}>Projets <FaSitemap className={classes.icon} /></button>
                    <button className={activeButton === 'contact' ? classes.active : ''} onClick={() => handleContent(<Contact />, 'contact', setHideDachboard(true))}>Contact <MdPermContactCalendar className={classes.icon} /></button>
                    <button className={activeButton === 'techno' ? classes.active : ''} onClick={() => handleContent(<Technologie />, 'techno', setHideDachboard(true))}>Technologie <MdDeveloperMode className={classes.icon} /></button>

                   
                </ul>
            </nav>
        </div>

        <div className={classes.containerPage}>

        <TiArrowSortedUp onClick={() => setHideDachboard(false)} className={hideDashboard ? classes.arrowRight : classes.arrowRemove }  size={60}/>
          {selectedContent}
        </div>

    </section>

            {show && <NavLinkIcons /> }

            {!show &&  <BiSolidShow className='show' onClick={()=> setShow(true)} /> }

            {show && <IoEyeOff className='anshow' onClick={()=> setShow(false)} /> }
    </>
  );
}
