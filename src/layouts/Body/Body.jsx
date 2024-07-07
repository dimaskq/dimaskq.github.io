import { useState } from 'react';
import './body.scss';
import JournalForm from '../../components/JournalForm/JournalForm';

const Body = ({addItem}) => {
    
    return <>
        <div className="body">
            <JournalForm addItem={addItem} />
        </div>
    </>
}

export default Body;