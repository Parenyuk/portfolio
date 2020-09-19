import React, { useEffect } from "react";
import { createPortal } from "react-dom";



export const ModalForm = ({isOpen,  children}) => {

    const modalForm = document.getElementById("modal");

    const el = document.createElement("div");

    useEffect(() => {
        // append to root when the children of Modal are mounted
        modalForm.appendChild(el);

        // do a cleanup
        return () => {
            modalForm.removeChild(el);
        };
    }, [el]);

    return (
        isOpen &&
        createPortal(
            // child element
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: "100%",
                    width: "100%",
                    padding: "300px",
                    backgroundColor: "rgba(0,0,0,0.6)"
                }}
            >
                <p
                    style={{
                        width: "50%",
                        background: "white",
                        padding: "50px",
                        textAlign: "center"
                    }}
                >
                    <div>
                        {'Thanks. Your message has been sent'}
                        {children}
                    </div>
                </p>
            </div>,
            // target container
            el
        )
    )
}


