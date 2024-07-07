import CardButton from '../CardButton/CardButton';
import JournalItem from '../JournalItem/journalItem';
import './journalList.scss';

const JournalList = ({data}) => {
    return (

    <>
        <ul className='journal-list'>
            {
               data.length === 0  ? <p className='journal-list__empty'>Пусто, добавьте новое воспоминание</p> : data.map((data) => {
                    return <li className="journal-item" key={data.id}><CardButton><JournalItem {...data}/></CardButton></li>
                })
            }
        </ul>
    </>);
}


export default JournalList;
