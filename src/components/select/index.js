import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import './select.css'

const Select = () => {
    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState('')
    const handleClick = () => {
        setOpen(!open)
    }
    const handleSelection = (option) => {
        setSelected(option)
        setOpen(false)
    }
    const options = ['option A', 'option B', 'option C', 'option D']
    return (
        <div>
            <div className='select' onClick={handleClick}>
                {selected ? selected : 'Select'}
                {open ? <FontAwesomeIcon icon={faCaretUp}/> : <FontAwesomeIcon icon={faCaretDown} />}
            </div>
            <div className={`options ${open ? 'open' : ''}`}>
                {options.map((option) => {
                    return (
                        <div className='option' onClick={() => handleSelection(option)}>{option}</div>
                    )
                })}
            </div>

        </div>
    );
};

export default Select;