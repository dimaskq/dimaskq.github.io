import { forwardRef } from "react";
import "./Input.scss";
import cn from "classnames";

const Input = forwardRef(function Input({className, isValid, appearence, ...props}, ref){
    return (
        <input ref={ref} {...props} className={cn(className, "journal-form__input", {
            ["invalid"]: !isValid,
            ["joutnal-form__input_title"]: appearence === "title"
        })}/>
    );
});

export default Input;