import { useState } from 'react'

const Input = ({ onAdd }) => {
    const [text, setText] = useState('')
    const onSubmit = (e) => {
        e.preventDefault()
        
        onAdd({text})

        // Reset input
        setText('')
    }

    const marginLeft = {
        marginLeft: 10
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Search:</label>
            <input type='text' 
                value={text} placeholder='Enter a gif to find' 
                style={marginLeft} 
                onChange={(e) => setText(e.target.value)}/>
            
            <input type='submit' value='Submit' style={marginLeft}/>
        </form>
    )
}

export default Input