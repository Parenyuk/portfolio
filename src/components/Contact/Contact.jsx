// import React from "react";
// import s from './Contact.module.css';
// import {Fade} from "react-reveal";
//
//
// const Contact = () => {
//     return (
//         <div id={'contact'} className={s.contacts}>
//             <Fade big>
//             <div className={s.container}>
//                 <span className={s.blockTitle}>Contact</span>
//                 <div className={s.line}></div>
//                 <form className={s.formWrapper}>
//                     <input className={s.formArea} placeholder='Name' type='text'></input>
//                     <input className={s.formArea} placeholder='E-mail' type='email'></input>
//                     <textarea className={s.messageArea} placeholder='Your message'></textarea>
//                         <button className={s.btnSubmit} type='submit'>SEND MESSAGE</button>
//                 </form>
//             </div>
//             </Fade>
//         </div>
//
// )
// }
// export default Contact;

//
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import s from './Contact.module.css';
import {useDispatch} from 'react-redux';
import {sendMessageData} from '../../redux/contactReducer';
import {ModalForm} from './ModalForm';


export const Contact = (props) => {


    const {handleSubmit, register, errors} = useForm();
    let dispatch = useDispatch();
    // const onSubmit = values => console.log(values);
    const onSubmit = (formData) => {
        debugger
        dispatch(sendMessageData(formData))

    }
    const [isModalOpen, setModalOpen] = useState(false);

    const toggleModal = () => setModalOpen(!isModalOpen);


    return (
        <div id={'contact'} className={s.contacts} onClick={toggleModal}>
            <div>
                <ModalForm isOpen={isModalOpen} >
                    <button onClick={toggleModal} >close modal</button>
                </ModalForm>
            </div>
            <div className={s.container}>
            <span className={s.blockTitle}>Contact</span>
            <div className={s.line}></div>
            <form onSubmit={handleSubmit(onSubmit)} className={s.formWrapper}>
                <input placeholder='Write your email'
                       className={s.formArea}
                    name="email"
                    ref={register({
                        required: 'Required',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'invalid email address'

                        }})}
                    />
                {errors.email && errors.email.message}

                <input type="text"
                       className={s.formArea}
                       placeholder='Write your name'
                    name="name"
                    ref={register({
                        validate: value => value !== 'admin' || 'Nice try!'
                    })}
                />
                {errors.name && errors.name.message}
                <input type="text" placeholder="Write your text" name="messages" className={s.messageArea}
                       ref={register(
                           {required: 'Please,write your text', maxLength: 200})}
                        />
                {errors.messages && errors.message.messages}
                <button className={s.btnSubmit} onClick={toggleModal} type="submit">Submit</button>
            </form>

            </div>
        </div>

    );
};


