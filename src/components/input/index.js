import _ from './_.module.css'

const Input = ({value, onChange, placeholder }) => {
    return (
        <input
            type='text'
            placeholder={placeholder}
            className={_.main}
            value={value}
            onChange={onChange}
        />
    );
};

export default Input;