import React from "react";
import s from './Footer.module.css';
import telegramIcon from './../../assets/img/squareIcon/telegram.svg';
import facebookIcon from './../../assets/img/squareIcon/facebook.svg';
import linkedInIcon from './../../assets/img/squareIcon/linkedin.svg';
import instagramIcon from './../../assets/img/squareIcon/instagram.svg'

import {Fade} from "react-reveal";


const Footer = () => {
    return (
        <div className={s.footer}>
            <Fade big>
            <div className={s.container}>
                <div className={s.name}>
                    <h2> Victor Parenyuk</h2>
                    <div className={s.line}></div>
                </div>
                <div className={s.socialBlock}>
                    <div className={s.socialIcon}>
                        <a href=''>
                            <img src={facebookIcon} className={s.Icon} />
                        </a>
                    </div>
                    <div className={s.socialIcon}>
                        <a href=''>
                            <img src={telegramIcon} className={s.Icon} />
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
                </div>
                <div className={s.blockRights}>
                    <h3>
                        2020 All rights reserved
                    </h3>
                </div>
            </div>
            </Fade>
        </div>

    )
}
export default Footer;