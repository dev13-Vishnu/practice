import React, { useEffect, useRef, useState } from 'react'

const MeasureElement = () => {
    const divRef = useRef(null);
    const [size, setSize] = useState({width:0, height:0});

    useEffect(() => {
        if(divRef.current) {
            setSize({
                width: divRef.current.offsetWidth,
                height: divRef.current.offsetHeight
            })
        }
    },[])
  return (
    <div>
      <div ref={divRef} style={{width:"200px", height:"100px", background:"lightblue"}}>
        Resize Me
      </div>

      <h2>Width:{size.width}px, Height:{size.height}px</h2>
    </div>
  )
}

export default MeasureElement
