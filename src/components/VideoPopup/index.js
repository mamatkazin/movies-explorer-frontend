function VideoPopup(props) {
  return (
    <section className={`popup popup_opacity_heavy ${props.card.name && "popup_opened"}`}>
      <div className="popup__video">
        <button
          type="button"
          aria-label="Закрыть форму"
          className="button popup__close"
          onClick={props.onClose}
        ></button>
        <iframe className="popup__frame" src={props.src} title={props.title}></iframe>
      </div>
    </section>
  );
}

export default VideoPopup;
