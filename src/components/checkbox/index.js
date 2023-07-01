import _ from './_.module.css'
import '../../App.css'
import { useState } from 'react';

const CheckboxComponent = () => {
    return (
        <div className='container'>
            <Checkbox name='Checkbox' checked={true} />
            {/* <Checkbox name='Checkbox2' checked={false}/> */}
        </div>
    )
}

const Checkbox = ({ name, checked }) => {
    const [selected, setSelected] = useState(checked)
    const handleChange = (e) => {
        setSelected(e.target.checked)
    }
    return (
        <div>
            <input
                type='checkbox'
                id={name}
                className={_.checkbox}
                onChange={handleChange}
                checked={selected}
            />
            <label for={name} className={_.label}>{name}</label>
        </div>
    );
};

export default CheckboxComponent;