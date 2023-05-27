import { FC } from 'react'

interface LogoProps {
  
}

const Logo: FC<LogoProps> = ({}) => {
  return <>   
        {/* logo */}
        <p className=' block font-black text-xl font-notosans'> 圖片
        <span className=' text-primary'>產生器</span></p>
    </>
}

export default Logo