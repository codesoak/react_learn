import { useState } from "react";

const BooleanState = () => {
    const [visible, setVisible] = useState(false)
    const handleVisibility = () => {
        setVisible((prevVisible) => !prevVisible)
    }
    return (
        <>
            <button onClick={handleVisibility}>
                {visible ? 'make Invisible' : 'make Visible'}
            </button>
            {visible ? <div>A Component</div> : null}
        </>
    );
};

export default BooleanState;