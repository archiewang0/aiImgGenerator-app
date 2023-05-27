import { FC } from 'react'
import { useState, useRef , Dispatch , SetStateAction  } from 'react'
import { ArrowLongRightIcon } from '@heroicons/react/24/outline'

  
  interface InputObjValProps{
    n: number,
    size: string,
    prompt: string
  }
interface FormProps {
    setListImags: Dispatch<SetStateAction<{url:string}[]>>
    setIsLoading: Dispatch<SetStateAction<boolean>>
    setRequestImgNumber: Dispatch<SetStateAction<number>>
}

const index: FC<FormProps> = ({setListImags ,setIsLoading, setRequestImgNumber}) => {

    const [inputObjValue,setInputObjValue] = useState<InputObjValProps>({
        n: 1, // openai.createimg 的參數 n: 產生的圖片數量
        size: '512x512', // openai.createimg 的參數 size: 圖片的解析度
        prompt: '',  // openai.createimg 的參數 prompt: 產生圖片的主題內容關鍵字
      })
      let timeoutID = useRef< null | ReturnType<typeof setTimeout>>(null)
        
    const handleInputElemnetChange=(e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement>)=>{
        if (timeoutID.current !== null){
        clearTimeout(timeoutID.current)
        }
        timeoutID.current = setTimeout(()=>{
        setInputObjValue(pre=>{
            const inputName = e.target.name
            const inputValue = () => {
            const value = e.target.value
            return inputName === 'n'?  Number(value) : value
            }
            return {
            ...pre,
            [inputName]:  inputValue()
            }
        })
        if (e.target.name === 'n' ){
            setRequestImgNumber(Number(e.target.value))
        }
        
        },400)
    }

    const handleSumbit = async (e: React.FormEvent)=>{
        e.preventDefault()
        
        try {
        setIsLoading(true)
        if(inputObjValue.prompt === ""){
            throw new Error('請輸入生產圖片的關鍵字')
        }

        const response = await fetch('http://localhost:5500/openai/images',{
            method: 'POST',
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({
            ...inputObjValue
            })
        })
        const jsonData = await response.json()
        setListImags(jsonData.data)

        } catch (err){
        console.error(err)
        
        if(err instanceof Error){
            alert(err.message)
        }

        } finally {
        setIsLoading(false)
        }
    }

    return <form className=' relative my-8 max-w-md' onSubmit={handleSumbit}>
        
        <div className=' felx mb-2 justify-between'>
            <label className=' w-full md:w-1/2 inline-flex pr-2'>
                <span>產生圖片數量:</span>
                <input type="number" 
                    className=' flex-grow'
                    defaultValue="1" 
                    min="1" max="10" 
                    name="n" onChange={handleInputElemnetChange}/>
            </label>

            <label className='w-full md:w-1/2 inline-flex pl-2'>
                <span>圖片解析度:</span>
                <select 
                    className=' flex-grow'
                    defaultValue="512x512" name="size" onChange={handleInputElemnetChange}>
                    <option value="256x256">256x256</option>
                    <option value="512x512">512x512</option>
                    <option value="1024x1024">1024x1024</option>
                </select>
            </label>
        </div>     
       
        
        <input onChange={handleInputElemnetChange} 
            name='prompt'
            type="text" 
            className=' indent-2 py-4 pr-[4.5rem] rounded-sm bg-gray-50 w-full md:max-w-md focus:ring-primary outline-none focus:ring-1' placeholder='發揮AI力量來創造'/>
        
        <button className=' absolute bottom-2.5 right-2.5 bg-primary text-white px-2 py-2 rounded'>
            <ArrowLongRightIcon className=' h-6'/>
        </button>

    </form>
}

export default index