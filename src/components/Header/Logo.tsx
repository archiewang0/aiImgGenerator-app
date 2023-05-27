import { FC } from 'react'
import { PaintBrushIcon } from '@heroicons/react/20/solid'

interface LogoProps {
  
}

const Logo: FC<LogoProps> = ({}) => {
  return <>   
        {/* logo */}
        <p className=' flex font-black text-xl font-notosans '> 
            <span className=' inline-block bg-primary p-0.5 rounded mr-2'>
                <PaintBrushIcon className=' h-5' fill='white'/>
            </span>
            圖片
            <span className=' text-primary'>產生器</span>
        </p>
    </>
}

export default Logo