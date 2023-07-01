import _ from './_.module.css'
import '../../App.css'
import { useState } from 'react'

const RadioComponent = () => {
    const [selected, setSelected] = useState('radio1')
    const handleChange = (e) => {
        setSelected(e.target.value)
    }
    return (
        <div className='container'>
            <Radio name='radio' onChange={handleChange} selected={selected}/>
            {/* <Radio name='radio2' onChange={handleChange} selected={selected}/> */}
        </div>
    )
}

const Radio = ({ name, onChange, selected }) => {
    return (
        <div>
            <input
                type='radio'
                id={name}
                className={_.radio}
                name='radioGroup'
                onChange={onChange}
                checked={name === selected}
                value={name}
            />
            <label for={name} className={_.label}>{name}</label>
        </div>
    );
};

export default RadioComponent;