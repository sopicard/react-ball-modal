# REACT BALL MODAL v2.1.0

A simple React modal component with a ball design.

## DESCRIPTION

React Ball Modal is a lightweight and customizable modal component for React applications.

### Prerequisites

Before using this modal component, make sure you have the following dependency installed:

- [React](https://reactjs.org/)

## INSTALLATION

You can install react-ball-modal via npm:

```bash
npm install react-ball-modal
```

## Usage

Here's an example of importing and using the Modal component in your project:

```jsx
import Modal from 'react-ball-modal'

function MyComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div>
      <button onClick={handleOpenModal}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} message='Choose your content !' />
    </div>
  )
}

export default MyComponent
```

### Props

- `isOpen` (boolean, required): Controls whether the modal is open or closed.
- `onClose` (function, required): Callback function to handle closing the modal.
- `message` (string): Message to display inside the modal.

### Styling

To apply the default styles provided with the Modal component, you can import the default CSS file into your project:

```jsx
import 'react-ball-modal/src/index.css'
```

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
