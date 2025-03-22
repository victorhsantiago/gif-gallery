import { useEffect, useRef, useState } from 'react'
import { useParams, useNavigate, useOutletContext } from 'react-router-dom'
import {
  CloseButton,
  ModalContainer,
  ModalHeader,
  Overlay,
} from './StyledGifModal'
import { Gif } from '@models/index'

export function GifModal() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { gifs } = useOutletContext<{ gifs: Gif[] }>()
  const [gif, setGif] = useState<Gif | undefined>(undefined)
  const modalRef = useRef<HTMLDivElement>(null)

  function handleClose() {
    navigate(-1)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.stopPropagation()
      handleClose()
    }
  }

  useEffect(() => {
    if (id) setGif(gifs.find((gif) => gif.id === id))
  }, [id])

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.focus()
    }
  }, [gif])

  return (
    <Overlay
      aria-hidden={false}
      aria-label="Modal overlay"
      onClick={handleClose}
    >
      <ModalContainer
        role="dialog"
        aria-modal="true"
        aria-label={gif?.title || 'Gif dialog'}
        tabIndex={-1}
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {gif && (
          <>
            <ModalHeader>
              <h2>{gif.title}</h2>
              <CloseButton aria-label="Close" onClick={handleClose}>
                &times;
              </CloseButton>
            </ModalHeader>
            <img src={gif.images.original.webp} alt={gif.title} />
          </>
        )}
      </ModalContainer>
    </Overlay>
  )
}
