import React from 'react'

function PropsWork(props) {
  return (
    <>
    <div>
      <h2>Hyy! My Name is {props.myName} and my age {props.myAge} year old</h2>
    </div>
    <div>
      <ul>
        {
          props.arr_obj.map((i) =>{
            return( 
            <li>{i}</li>
            )
          })
        }
      </ul>
    </div>
    </>
  )
}

export default PropsWork
