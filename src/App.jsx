import { useState } from 'react'
import Modal from './components/Modal'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true);
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <main>
      <h1 className='mainTitle'>Ball Modal</h1>
      <button className='button' onClick={handleOpenModal}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} message="Choose your content !" />
    </main>
  )
}

export default App
