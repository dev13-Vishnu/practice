import React, { useEffect, useRef } from 'react'

const AutoFocusInput = () => {

    const inputRef = useRef(null);

    useEffect(()=> {
        inputRef.current.focus();
    },[]);
  return (
    <div>
      <input type="text" ref={inputRef} placeholder='Type here...'/>
    </div>
  )
}

export default AutoFocusInput
