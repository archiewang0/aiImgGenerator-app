import { FC } from 'react'

interface HeaderProps {
  
}

const Header: FC<HeaderProps> = ({}) => {
  return <div className="bg-gradient-to-r from-[#97D9E1] to-[#D9AFD9]">
    <div className='container mx-auto max-w-5xl px-2 py-6'>
      {/* logo */}
      <p className=' block font-black text-xl font-notosans'> 圖片
        <span className=' text-primary'>產生器</span></p>
      {/* tagline */}
      <div className=' mt-4'>
        <h2 className=' font-bold text-xl max-w-xs mb-1'>發揮AI的力量,來產生驚人的圖片</h2>
        <p className=' font-light opacity-80 hidden md:inline-block'>使用人工智能圖像生成技術創建圖片吧</p>
      </div>
    </div>
  </div>
}

export default Header