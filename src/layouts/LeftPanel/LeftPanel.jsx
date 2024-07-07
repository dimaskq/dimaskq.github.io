import './leftPanel.scss';
import JournalList from '../../components/JournalList/JournalList';
import JournalAddButton from '../../components/JournalAddButton/JournalAddButton';

const LeftPanel = ({data}) => {
    return <div className="leftPanel">
        <JournalAddButton />
        <JournalList data = {data} />
    </div>
}

export default LeftPanel;