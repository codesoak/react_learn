import { useState } from "react";

const ObjectState = () => {
    const [userDetails, setUserDetails] = useState({
        id: 1,
        name: 'john',
        city: 'Paris'
    })
    const changeDetails = (value, field) => {
        setUserDetails({ ...userDetails, [field]: value })
    }
    return (
        <div>
            <div>
                <p>Name: {userDetails.name}</p>
                <p>City: {userDetails.city}</p>
            </div>
            <input type='text' name={userDetails.name} onChange={(e) => changeDetails(e.target.value, 'name')} placeholder="Enter Name" />
            <input type='text' name={userDetails.city} onChange={(e) => changeDetails(e.target.value, 'city')} placeholder="Enter City" />
        </div>
    );
};

export default ObjectState;