import { useState } from 'react'

const Input = () => {

    const [text, setText] = useState('')
    
    return (
        <form>
            <input type='text' placeholder='Enter a gif to find'/>
        </form>
    )
}

export default Input