import React from 'react';
import {ToggleContent} from './ToggleContent';
import {Modal} from './ModalForm';


export const MainModal = (props) => (
    <p>

                <Modal>
                    Your Message has been sent!<br/>
                    <button onClick={() =>props.setIsShown(false)} >Close</button>
                </Modal>

    </p>
);
