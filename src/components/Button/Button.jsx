import { useCallback, useState } from 'react';
import './button.scss';

const Button = ({text}) => {
    return (
        <>
            <button className="button-save">{text}</button>
        </>
    );
}

export default Button;