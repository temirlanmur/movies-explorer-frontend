import './Popup.css';

export default function Popup({ text, close }) {

  const popupClass = text ? 'popup popup_open' : 'popup';

  return (
    <div className={popupClass}>
      <div className="popup__container">
        <p className="popup__text">{text}</p>
        <button
          type="button"
          className="popup__close-button"
          onClick={close}>
        </button></div>
    </div>
  );
}
