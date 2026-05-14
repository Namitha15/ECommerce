import React from 'react'
// import "./styles/style.css" 

const UserCard = (props) => {
    const { id, firstName, lastName, age, grade, marks, percentage, city } = props;
    
    return (
        <div className='user-Container' style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', borderRadius: '8px' }}>
            <table border="1" style={{ width: '100%', textAlign: 'left' }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>City</th>
                        <th>Grade</th>
                        <th>Marks</th>
                        <th>Percentage</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{id}</td>
                        <td>{firstName}</td>
                        <td>{lastName}</td>
                        <td>{age}</td>
                        <td>{city}</td>
                        <td>{grade}</td>
                        <td>{marks}</td>
                        <td>{percentage}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default UserCard;