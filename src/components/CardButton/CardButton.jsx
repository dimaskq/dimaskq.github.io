import './CardButton.scss';

const CardButton = ({children}) => {
    return (
        <>
            <button className="card-button">{children}</button>
        </>
    );
}

export default CardButton;