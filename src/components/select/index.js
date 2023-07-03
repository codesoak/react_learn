import { useState } from "react";
import './select.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Select = () => {
    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState('')
    const options = ['option A', 'option B', 'option C', 'option D']
    const handleClick = () => {
        setOpen(!open)
    }
    const handleSelection = (option) => {
        setSelected(option)
        setOpen(false)
    }
    return (
        <div>
            <div className="select" onClick={handleClick}>
                {selected ? selected : 'Select Option'}
                {open ? <FontAwesomeIcon icon={faCaretUp}/> : <FontAwesomeIcon icon={faCaretDown}/>}
            </div>
            <div className={`options ${open ? 'open' : ''}`}>
                {options.map((option) => {
                    return (
                        <div className="option" onClick={() => handleSelection(option)}>
                            {option}
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Select;