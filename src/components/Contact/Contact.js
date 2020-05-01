import React from "react";
import s from './Contact.module.css';


const Contact = () => {
    return (
        <div className={s.contacts}>
            <div className={s.container}>
                <span className={s.blockTitle}>Contacts</span>
                <form className={s.formWrapper}>
                    <input className={s.formArea} placeholder='Name' type='text'></input>
                    <input className={s.formArea} placeholder='E-mail' type='email'></input>
                    <textarea className={s.messageArea} placeholder='Your message'></textarea>
                        <button className={s.btnSubmit} type='submit'>SEND MESSAGE</button>
                </form>
            </div>
        </div>

)
}
export default Contact;