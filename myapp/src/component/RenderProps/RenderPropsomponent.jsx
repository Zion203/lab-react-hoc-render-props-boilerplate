import React, { useState } from 'react'

const RenderPropsomponent = (props) => {
    let [count,setCount] =useState(0)

    const incre = () =>{ 
        setCount((prev) =>prev+1)
    }
  return (
    <>
    {props.render(count,incre)}
    </>
  )
}

export default RenderPropsomponent