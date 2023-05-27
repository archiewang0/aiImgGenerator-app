import { FC ,} from 'react'
import { PhotoIcon } from '@heroicons/react/24/outline'

interface SketeonProps {
  item: number
}

const Sketeon: FC<SketeonProps> = ({item}) => {
    // console.log(item)
    
    // component 回傳只能回傳一個element
    // 如果不想用element包起來的話可以用<></>來包裹
    let renderItems = [...Array(item).keys()]
    if ( renderItems.length < 1) {
        return null
    } else {
        return <>
            {renderItems.map(()=>{
                return <div className='animate-pulse w-full' key={Math.random().toString()}>
                    <div className='flex items-center justify-center w-full h-80 bg-gray-300 rounded'>
                        <PhotoIcon className='w-12 '/>
                    </div>
                </div>
            })}
        </>
    }
}

export default Sketeon