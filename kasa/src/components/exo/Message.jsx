import React from 'react'

function Message() {
    function handleClick() {
        console.log("clicked")
    }
  return (
    <div>
        <button onClick={handleClick}>Click here to get a message</button>
    </div>
  )
}

export default Message