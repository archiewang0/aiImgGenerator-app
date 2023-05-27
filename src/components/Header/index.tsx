import { FC , Dispatch ,SetStateAction } from 'react'
import Form from "@/components/Form"
import Logo from './Logo'
import TagLine from './TagLine'

interface HeaderProps {
  setListImags: Dispatch<SetStateAction<{url:string}[]>>
  setIsLoading: Dispatch<SetStateAction<boolean>>
  setRequestImgNumber: Dispatch<SetStateAction<number>>
}

const Header: FC<HeaderProps> = ({setIsLoading , setListImags , setRequestImgNumber}) => {

  return <div className="bg-gradient-to-r from-[#97D9E1] to-[#D9AFD9]">
    <div className='container mx-auto max-w-5xl px-2 py-6'>
      <Logo />

      <TagLine/>

      {/* form */}
      <Form 
        setListImags={setListImags} 
        setIsLoading={setIsLoading} 
        setRequestImgNumber={setRequestImgNumber}/>

    </div>
  </div>
}

export default Header