import './journalForm.scss';
import { useEffect, useReducer, useRef } from 'react';
import Button from '../Button/Button';
import cn from 'classnames';
import "../../base-style/style.css";
import { INITIAL_STATE, formReducer } from './JournalForm.state';
import Input from '../Input/Input';

const JournalForm = ({addItem}) => {
    const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
    const { isValid, isFormReadyToSubmit, values } = formState;

    const titleRef = useRef();
    const dateRef = useRef();
    const textRef = useRef();
    const tagRef = useRef();

    const focusError = (isValid) => {
        switch(true) {
            case !isValid.title:
                titleRef.current.focus()
                break;
            case !isValid.date:
                dateRef.current.focus()
                break;
            case !isValid.text:
                textRef.current.focus()
                break;
            case !isValid.tag:
                tagRef.current.focus()
                break;
        }
    }

    useEffect(()=> {
        let timerId;
        if(!isValid.title || !isValid.date || !isValid.tag || !isValid.text){
            focusError(isValid)
            timerId = setTimeout(()=> {
                dispatchForm({type: "RESET_VALIDITY"});
                setFormValidState(INITIAL_STATE);
            }, 2000)
        }

        return () => {
            clearTimeout(timerId);
        }
    }, [isValid]);

    useEffect(() => {
        if(isFormReadyToSubmit){
            addItem(values);
            dispatchForm({type: "CLEAR"});
        }
    }, [isFormReadyToSubmit, values, addItem]);

    //extract values ​​from the form, or rather from inputs
    const addJournalItem = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const formProps = Object.fromEntries(formData)
        dispatchForm({type: "SUBMIT", payload: formProps});
    }

    const onChange = (e) => {
        dispatchForm({type:"SET_VALUE", payload: {[e.target.name]: e.target.value}})
    }   
    return <>
        <form className="journal-form" onSubmit={addJournalItem}>
            <div className='joutnal-form__title'>
                <Input type="text" ref={titleRef} isValid={isValid.title} name="title" onChange={onChange} value={values.title} appearence="title" />
            </div>
            <div className='joutnal-form__data'>
                <span className='icon-calendar'>Дата</span>
                <Input type="date"ref={dateRef} isValid={isValid.date} name="date" value={values.date} onChange={onChange} />
            </div>
            <div className='journal-form__tag'>
                <span className='icon-folder'>Метки</span>
                <Input type="text" ref={tagRef} isValid={isValid.tag} name="tag" value={values.tag} onChange={onChange} />
            </div>
            <textarea name="text" ref={textRef} id="" value={values.text} onChange={onChange} className={cn('journal-form__input', 'joutnal-form__input_text', {
                ["invalid"]: !isValid.text
            })}  ></textarea>
            <Button text="Сохранить"/>
        </form>
    </>   
}

export default JournalForm;