import React from 'react'

const LikeimageRender = (props) => {
    let {count,incre} = props
    return (
      <>
          <button onClick={incre}>Image {count}</button>
      </>
    )
}

export default LikeimageRender