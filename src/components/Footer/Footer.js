import React from "react";
import s from './Footer.module.css';
import telegramIcon from './../../assets/img/squareIcon/telegram.svg';
import facebookIcon from './../../assets/img/roundIcon/facebook.svg';
import linkedInIcon from './../../assets/img/roundIcon/linkedin.svg';
import instagramIcon from './../../assets/img/squareIcon/instagram.svg'
import {faFacebook, faInstagram, faLinkedin, faTelegram} from "@fortawesome/free-brands-svg-icons";
import FontAwesome from "./FontAwesome/FontAwesome";


const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.container}>
                <div className={s.name}>
                    <h2> Victor Parenyuk</h2>
                    <div className={s.line}></div>
                </div>
                <div className={s.socialBlock}>
                    <div className={s.socialIcon}>
                        <a href=''>
                            <img src={telegramIcon} className={s.Icon} />
                        </a>
                    </div>
                    <div className={s.socialIcon}>
                        <a href=''>
                            <img src={facebookIcon} className={s.Icon} />
                        </a>
                    </div>
                    <div className={s.socialIcon}>
                        <a href=''>
                            <img src={linkedInIcon} className={s.Icon} />
                        </a>
                    </div>
                    <div className={s.socialIcon}>
                        <a href=''>
                            <img src={instagramIcon} className={s.Icon} />
                        </a>
                    </div>
                    <FontAwesome  icon={faTelegram} size={'3x'} />
                    <FontAwesome  icon={faFacebook} size={'3x'} />
                    <FontAwesome  icon={faInstagram} size={'3x'} />
                    <FontAwesome  icon={faLinkedin} size={'3x'} />
                </div>
                <div className={s.blockRights}>
                    <h3>
                        2020 Все права защищены
                    </h3>
                </div>
            </div>
        </div>

    )
}
export default Footer;