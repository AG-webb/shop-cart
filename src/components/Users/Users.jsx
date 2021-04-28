import { Pagination } from 'antd';
import React from 'react';
import Loader from '../Loader/Loader';
import User from '../User/User';
import './Users.scss';

const Users = (props) => {

    const renderUsers = () => {
        let users = props.users.data || [];
        let allUsers = [];

        if(users.length) {
            users.map(user => {
                allUsers = [
                    ...allUsers,
                    <User
                        key={user.id}
                        id={user.id}
                        firstName={user.first_name}
                        lastName={user.last_name}
                        avatar={user.avatar}
                        email={user.email}
                    />
                ];

                return allUsers;
            })
        } else {
            return <div>No users yet!! :D</div>
        }

        return allUsers;
    }
    
    const paginationChange = (currentPage) => {
        props.setCurrentPage(currentPage);
    }

    if(props.isFetching) {
        return <Loader />
    } 

    return (
        <div className="users-container">
            <div className="users">
                {renderUsers()}
            </div>
    
            <div className="pagination">
                <Pagination
                    current={props.users.page || 1}
                    total={props.users.total_pages * 10 || 10}
                    onChange={paginationChange}
                />
            </div>
        </div>
    );
}

export default Users;