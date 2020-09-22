import {createPortal} from 'react-dom';
import React from 'react';
import s from './ModalForm.module.css'

export const Modal = ({ children }) => (
    createPortal(
        <div className={s.modal}>
            {children}
        </div>,
        document.getElementById('modal-root')
    )
);
