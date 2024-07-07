import './journalItem.scss';

const JournalItem = ({title, info, data}) => {

    return (
        <div className='journal-item__container'>
            <h2 className="journal-item__header">{title}</h2>
            <div className="journa-item__content">
                <p className="journal-item__data">{data}</p>
                <p className="journal-item__text">{info}</p>
            </div>
        </div>
    );
}

export default JournalItem;