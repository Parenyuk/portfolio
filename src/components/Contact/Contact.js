import React from "react";
import s from './Contact.module.css';
import {Fade} from "react-reveal";


const Contact = () => {
    return (
        <div id={'contact'} className={s.contacts}>
            <Fade big>
            <div className={s.container}>
                <span className={s.blockTitle}>Contact</span>
                <div className={s.line}></div>
                <form className={s.formWrapper}>
                    <input className={s.formArea} placeholder='Name' type='text'></input>
                    <input className={s.formArea} placeholder='E-mail' type='email'></input>
                    <textarea className={s.messageArea} placeholder='Your message'></textarea>
                        <button className={s.btnSubmit} type='submit'>SEND MESSAGE</button>
                </form>
            </div>
            </Fade>
        </div>

)
}
export default Contact;