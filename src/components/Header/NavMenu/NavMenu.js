import React from "react";
import s from './NavMenu.module.css'
import { Link, animateScroll as scroll } from "react-scroll";


const NavMenu = () => {
    return (
        <div className={s.navMenu}>
            <Link activeClass="active" className="test1" to="main" spy={true} smooth={true} duration={800}> <a href="" className={s.link}>Main</a> </Link>
            <Link activeClass="active" className="test1" to="skills" spy={true} smooth={true} duration={800}> <a href="" className={s.link}>Skills</a></Link>
            <Link activeClass="active" className="test1" to="projects" spy={true} smooth={true} duration={800}  offset={-200}> <a href="" className={s.link}>Projects</a></Link>
            <Link activeClass="active" className="test1" to="contact" spy={true} smooth={true} duration={800} ><a href="" className={s.link}>Contact</a></Link>
        </div>
    )
}
export default NavMenu;