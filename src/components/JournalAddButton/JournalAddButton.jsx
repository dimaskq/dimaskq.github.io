import CardButton from "../CardButton/CardButton"
import "./journalAddButton.scss"

const JournalAddButton = () => {
    return <div className="jouralAddButton">
        <CardButton><div className="jouralAddButton__container"><span className="plus">+</span>Добавить новое воспоминание</div></CardButton>
    </div>
}

export default JournalAddButton;