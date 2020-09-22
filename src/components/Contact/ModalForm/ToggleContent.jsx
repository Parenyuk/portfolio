import React from 'react';

export const ToggleContent = ({ toggle, content }) => {
    const [isShown, setIsShown] = React.useState(false);
    const hide = () => setIsShown(false);
    const show = () => setIsShown(true);

    return (
        <>
            {toggle(show)}
            {isShown && content(hide)}
        </>
    );
}
