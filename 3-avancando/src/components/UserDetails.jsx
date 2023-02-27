import React from 'react'

const UserDetails = ({ name, age, occupation }) => {
    return (
        <div>
            <ul>
                <li>Name: {name}</li>
                <li>Age: {age}</li>
                <li>Occupation: {occupation}</li>
                {
                    (age >= 18 ? <li>You are eligible to get a driver's license! </li> : <li>You aren't eligible to get a driver's license!</li>)
                }

            </ul>
        </div>
    )
}

export default UserDetails