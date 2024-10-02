import React, { useState } from 'react'

const StateExmple = () => {
    const [name, setName] = useState("Ronak")
    const changeName = () => {
      setName("Barad")
    }

    const changeEventName = (e) => {
      setName(e.target.value)
    }
  return (
    <>
      <h3>State Example</h3>
      <input type="text" id='name' onChange={changeEventName} />
      <h4 >My Work Name is {name}</h4>
      {/* <button onClick={changeName}>Add</button> */}
      {/* <button onClick={() => setName("hyy")}>Add</button> */}
    </>
  )
}

export default StateExmple
