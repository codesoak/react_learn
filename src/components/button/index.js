import _ from './_.module.css'

const ButtonComponent = () => {
    const handleClick = () => {
        console.log('clicked')
    }
    
    return (
        <div className='container'>
            {/* <Button name='Button1' type='primary' size='large' onClick={handleClick} round /> */}
            <Button name='Button' type='primary' size='medium' onClick={handleClick} round />
            {/* <Button name='Button3' type='secondary' size='small' /> */}
        </div>
    )
}

const Button = ({ type, name, size, round, onClick }) => {
    const styles = {
        backgroundColor: (type === 'primary' && 'turquoise') || (type === 'secondary' && 'grey'),
        fontSize: (size === 'small' && '1rem') || (size === 'medium' && '1.5rem') || (size === 'large' && '2rem'),
        borderRadius: round ? '1rem' : ''
    }
    return (
        <button className={_.main} style={styles} onClick={onClick}>
            {name}
        </button>
    );
};

export default ButtonComponent;