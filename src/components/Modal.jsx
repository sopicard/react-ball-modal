const Modal = ({ isOpen, onClose, message }) => {
    if (!isOpen) return null
  
    return (
      <div className="modal">
        <div className="modal__content">
          <i className=" modal__close fa-solid fa-circle-xmark" onClick={onClose}></i>
          <p className="modal__message">{message}</p>
        </div>
      </div>
      
    )
  }
  
  export default Modal
  
  
  
  