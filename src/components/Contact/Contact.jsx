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
import React from 'react';
import {useForm} from 'react-hook-form';
import s from './Contact.module.css';
import {useDispatch} from 'react-redux';
import {sendMessageData} from '../../redux/contactReducer';


export const Contact = (props) => {


    const {handleSubmit, register, errors} = useForm();
    let dispatch = useDispatch();
    // const onSubmit = values => console.log(values);
    const onSubmit = (formData) => {
        debugger
        dispatch(sendMessageData(formData))

    }

    return (
        <div id={'contact'} className={s.contacts}>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Write your email'
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
                       placeholder='Write your name'
                    name="name"
                    ref={register({
                        validate: value => value !== 'admin' || 'Nice try!'
                    })}
                />
                {errors.name && errors.name.message}
                <input type="text" placeholder="Write your text" name="messages"
                       ref={register(
                           {required: 'Please,write your text', maxLength: 200})}
                        />
                {errors.messages && errors.message.messages}

                <button type="submit">Submit</button>

            </form>

        </div>

    );
};


