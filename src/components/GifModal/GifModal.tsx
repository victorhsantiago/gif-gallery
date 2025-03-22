import { useEffect, useRef, useState } from 'react'
import {
  useParams,
  useNavigate,
  useOutletContext,
  useLocation,
} from 'react-router-dom'
import {
  CloseButton,
  ModalContainer,
  ModalHeader,
  Overlay,
} from './GifModal.styled'
import { Gif } from '@models/index'
import { ImageWithLoader } from '@components/index'

export function GifModal() {
  const { id } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const { gifs } = useOutletContext<{ gifs: Gif[] }>()
  const [gif, setGif] = useState<Gif | undefined>(undefined)
  const modalRef = useRef<HTMLDivElement>(null)

  const { focusId } = (location.state as { focusId?: string }) || {}

  function handleClose() {
    navigate(-1)

    setTimeout(() => {
      if (focusId) {
        const linkEl = document.getElementById(
          focusId
        ) as HTMLAnchorElement | null
        if (linkEl) {
          linkEl.focus()
        }
      }
    }, 0)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.stopPropagation()
      handleClose()
    }
  }

  useEffect(() => {
    if (id) setGif(gifs.find((gif) => gif.id === id))
  }, [id, gifs])

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
            <ImageWithLoader src={gif.images.original.webp} alt={gif.title} />
          </>
        )}
      </ModalContainer>
    </Overlay>
  )
}
