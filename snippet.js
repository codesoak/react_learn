import { useState } from 'react'
import _ from './_.module.css'

const Input = () => {
    const [text, setText] = useState('')
    const handleChange = (e) => {
        setText(e.target.value)
    }
    return (
        <input
            type='text'
            placeholder='Enter Name'
            value={text}
            onChange={handleChange}
            className={_.main}
        />
    )
}

export default Input