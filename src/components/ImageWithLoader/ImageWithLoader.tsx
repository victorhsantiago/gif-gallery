import { Loading } from '@components/Loading/Loading'
import { useState } from 'react'
import { LoaderWrapper, StyledImage, Wrapper } from './StyledImageWithLoader'

interface ImageWithLoaderProps {
  src: string
  alt: string
  className?: string
}

export function ImageWithLoader({ src, alt, className }: ImageWithLoaderProps) {
  const [loaded, setLoaded] = useState(false)

  return (
    <Wrapper className={className}>
      <LoaderWrapper $loaded={loaded}>
        <Loading />
      </LoaderWrapper>

      <StyledImage
        src={src}
        alt={alt}
        $loaded={loaded}
        onLoad={() => setLoaded(true)}
      />
    </Wrapper>
  )
}
