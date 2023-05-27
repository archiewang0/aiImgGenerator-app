import { FC } from 'react'

interface TagLineProps {
  
}

const TagLine: FC<TagLineProps> = ({}) => {
    return <>
        {/* tagline */}
        <div className=' mt-4'>
            <h2 className=' font-bold text-xl max-w-xs mb-1'>發揮AI的力量,來產生驚人的圖片</h2>
            <p className=' font-light opacity-80 hidden md:inline-block'>使用人工智能圖像生成技術創建圖片吧</p>
        </div>
    </>
}

export default TagLine