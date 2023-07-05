import { useState } from "react";

const ArrayState = () => {
    const [namesList, setNamesList] = useState([])
    const [name, setName] = useState('')
    const addName = () => {
        setNamesList([...namesList, name])
    }
    return (
        <div>
            <input type='text' name={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={addName}>
                Add Name
            </button>
            {namesList.map((name) => {
                return (
                    <div>
                        {name}
                    </div>
                )
            })}
        </div>
    );
};

export default ArrayState;