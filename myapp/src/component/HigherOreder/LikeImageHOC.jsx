import React from "react";

const LikeImageHOC =(props)=>{
    let {count, incre} = props;
    return (
        <>
        <button onClick={incre} >Like Image Hoc {count}</button>
        </>
    )
}
console.log(2)
export default LikeImageHOC;