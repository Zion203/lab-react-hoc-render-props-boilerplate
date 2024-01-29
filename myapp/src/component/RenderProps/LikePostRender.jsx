import React from 'react'

const LikePostRender = (props) => {
    let {count,incre} = props
  return (
    <>
        <button onClick={incre}>Post {count}</button>
    </>
  )
}

export default LikePostRender