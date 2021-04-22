import React from 'react';
import './User.scss';

const User = (props) => {
    let withImageUserId = 10;

    return (
        <div className="user">
            <div className="user__wrap" title={props.username}>
                <div className="user__photo">
                    {props.id === withImageUserId && <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjF8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80" alt="test" />}
                </div>
                <div className="user__name" title={props.username}>
                    {props.name}
                </div>
            </div>
        </div>
    );
}

export default User;