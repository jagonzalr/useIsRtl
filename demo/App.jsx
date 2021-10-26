import { useState } from 'react'

import useIsRtl from '../src/index'

import './styles/tailwind.css'
import './styles/index.scss'

export default () => {
  const isRtl = useIsRtl()

  const [dir, setDir] = useState(isRtl ? 'rtl' : 'ltr')

  function changeDirection(e) {
    e.preventDefault()
    const newDir = isRtl ? 'ltr' : 'rtl'
    document.dir = newDir
    setDir(newDir)
  }

  return (
    <div className='flex h-screen'>
      <div className='m-auto'>
        <h1 className='font-bold text-3xl flex-1'>useIsRtl</h1>
        <p className='mb-2'>{isRtl ? 'Right to lefft' : 'Left to right'}</p>
        <button className='bg-blue px-5 py-2' onClick={changeDirection}>
          {`Change direction to ${dir === 'rtl' ? 'ltr' : 'rtl'}`}
        </button>
      </div>
    </div>
  )
}
