import React, { useState } from 'react'

export default function App(props) {
    const [isToggleOn, setToggleOn] = useState(true)

    function handleClick() {
        setToggleOn(!isToggleOn)
        if (isToggleOn) {
            props.stop()
        }
        else {
            props.start()
        }
    }

    return (
        <div>
            <button onClick={handleClick}>{isToggleOn ? 'stop' : 'start'}</button>
        </div>
    )
}