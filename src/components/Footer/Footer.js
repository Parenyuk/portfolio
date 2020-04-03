import React from "react";
import s from './Footer.module.css';


const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.container}>
                <div>
                    <h2> Victor Parenyuk</h2>
                </div>
                <div className={s.socialBlock}>
                    <div className={s.socialIcon}></div>
                    <div className={s.socialIcon}></div>
                    <div className={s.socialIcon}></div>
                    <div className={s.socialIcon}></div>
                </div>
                <div><h2>
                    2020 Все права защищены
                </h2>
                </div>
            </div>
        </div>

    )
}
export default Footer;