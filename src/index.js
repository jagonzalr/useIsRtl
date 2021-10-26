import { useState, useLayoutEffect } from 'react'

export default function useIsRtl() {
  const [isRtl, setIsRtl] = useState(false)
  useLayoutEffect(() => {
    setIsRtl(document.dir === 'rtl')
  }, [document.dir])
  return isRtl
}
