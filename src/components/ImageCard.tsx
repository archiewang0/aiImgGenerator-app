import { FC } from 'react'

interface ImageCardProps {
  image: string
}

const ImageCard: FC<ImageCardProps> = ({image}) => {
  return <img 
    className=' w-full rounded shadow-sm'
    src={image} alt="image" />
}

export default ImageCard