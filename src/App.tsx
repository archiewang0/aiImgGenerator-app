import { useState } from 'react'
import Header from '@/components/Header';
import ImageResult from './components/ImageResult';

function App() {
    const [listImages, setListImags] = useState<{url:string}[]>([])
    // 回傳 openai 的圖片陣列
    const [isLoading,setIsLoading] = useState<boolean>(false)

    const [requestImgNumber , setRequestImgNumber] = useState<number>(1)


    return (
      <>
        <Header setListImags={setListImags} setIsLoading={setIsLoading} setRequestImgNumber={setRequestImgNumber}/>
        <ImageResult listImages={listImages} isLoading={isLoading} requestImgNumber={requestImgNumber}/>
      </>
    )
}

export default App
