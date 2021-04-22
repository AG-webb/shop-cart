import React from 'react';
import User from '../User/User';
import './Users.scss';

const Users = (props) => {
    const renderUsers = () => {
        let allUsers = [];

        if(props.users.length) {
            props.users.map(user => {
                allUsers = [
                    ...allUsers,
                    <User
                        key={user.id}
                        id={user.id}
                        name={user.name}
                        username={user.username}
                    />
                ];

                return allUsers;
            })
        } else {
            return <div>No users yet!! :D</div>
        }

        return allUsers;
    } 

    return (
        <div className="users">
            {renderUsers()}
        </div>
    );
}

export default Users;