import { useState } from 'react';
import { useParams } from "react-router-dom";
import Modal from 'react-modal';

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Video } from "../../components/Video";

export function Event() {
  const { slug } = useParams<{ slug: string }>()

  const [modalIsOpen, setModalIsOpen] = useState(false)

  function handleOpenModal() {
    setModalIsOpen(true)
  }

  function handleCloseModal() {
    setModalIsOpen(false)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header modalIsOpen={modalIsOpen} onOpenModal={handleOpenModal} onRequestClose={handleCloseModal} />
      <main className="flex flex-1">
        { slug
          ? <Video lessonSlug={slug} />
          : <div className="flex-1" />
        }
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={handleCloseModal}
          overlayClassName="react-modal-overlay"
          className="react-modal-content"
          ariaHideApp={false}
        >
          <Sidebar modal={modalIsOpen} onRequestClose={handleCloseModal} />
        </Modal>
        <Sidebar />
      </main>
    </div>
  )
}
