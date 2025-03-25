import { useEffect, useRef } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import {
  CloseButton,
  ModalContainer,
  ModalHeader,
  Overlay,
} from './GifModal.styled'
import { ImageWithLoader } from '@components/index'
import { useFetchGifs } from '@hooks/useGiphy'
import { handleEscKeyDown } from '@utils/domUtils'

export function GifModal() {
  const { id } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const { fetchGif, gif } = useFetchGifs()
  const modalRef = useRef<HTMLDivElement>(null)

  const { focusId } = (location.state as { focusId?: string }) || {}

  function handleClose() {
    navigate(-1)
  }

  useEffect(() => {
    if (id) {
      fetchGif(id)
    }
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
        onKeyDown={(e) => handleEscKeyDown(e, handleClose, focusId)}
      >
        {gif && (
          <>
            <ModalHeader>
              <h2>{gif.title}</h2>
              <CloseButton aria-label="Close" onClick={handleClose}>
                &times;
              </CloseButton>
            </ModalHeader>
            <ImageWithLoader src={gif.images.original.webp} alt={gif.title} />
          </>
        )}
      </ModalContainer>
    </Overlay>
  )
}
