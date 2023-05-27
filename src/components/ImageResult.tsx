import { FC } from 'react'
import Sketeon from './Sketeon';
import ImageCard from './ImageCard';

interface ImageResultProps {
    listImages: {url:string}[]
    isLoading: boolean
    requestImgNumber: number
}

const ImageResult: FC<ImageResultProps> = ({isLoading , listImages,requestImgNumber}) => {
    return (
        <div className=' container max-w-5xl mx-auto px-6 py-6'>
            <div className=' grid md:grid-cols-2 gap-4'>
                {isLoading ? 
                    <Sketeon item={requestImgNumber} />
                    : 
                    listImages.map(img=>{
                    return <ImageCard image={img.url} key={Math.random().toString()}/>
                    })}
                
            </div>

        </div>
    )   
}

export default ImageResult