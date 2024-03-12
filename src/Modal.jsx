/**
 * Modal component.
 * Displays a modal dialog with a message.
 * @param {Object} props - Component props.
 * @param {boolean} props.isOpen - Indicates whether the modal is open or not.
 * @param {Function} props.onClose - Callback function to close the modal.
 * @param {string} props.message - The message to display in the modal.
 * @returns {JSX.Element} Modal component.
 */
const Modal = ({ isOpen, onClose, message }) => {
  // If modal is not open, don't render anything
  if (!isOpen) return null;

  // Render the modal with the provided message
  return (
    <div className='modal' aria-modal='true' role='dialog'>
      <div className='modal__content'>
        {/* Close button */}
        <i className='modal__close fa-solid fa-circle-xmark' onClick={onClose} aria-label='Close Modal'></i>
        {/* Message */}
        <p className='modal__message'>{message}</p>
      </div>
    </div>
  )
}

export default Modal
