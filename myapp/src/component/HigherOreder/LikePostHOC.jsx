import React from "react";

const LikePostHOC =(props)=>{
    let {count, incre} = props;
    return (
        <>
        <button onClick={incre}>Like Post Hoc {count}</button>
        </>
    )
}
console.log(1)
export default LikePostHOC;