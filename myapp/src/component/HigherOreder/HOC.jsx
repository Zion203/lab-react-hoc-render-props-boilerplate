import React, { useState } from 'react'

function HOC(PassedComp) {
    const NewComponent = () => {
        let [count , setcount] = useState(0)

        const incre = () =>{
            setcount((prev) => prev+1)

        }
        return (
            <>
                <PassedComp count={count}  incre = {incre}></PassedComp>
            </>
        )
    }
  return (
    NewComponent
  )
}
console.log(3)
export default HOC