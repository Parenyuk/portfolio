import React from 'react';
import {ToggleContent} from './ToggleContent';
import {Modal} from './ModalForm';


export const MainModal = () => (
    <p>
        <ToggleContent
            toggle={show => <button onClick={show}>Open</button>}
            content={hide => (
                <Modal>
                    Your Message has been sent!<br/>
                    <button onClick={hide} >Close</button>
                </Modal>
            )}
        />
    </p>
);
