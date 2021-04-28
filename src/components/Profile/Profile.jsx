import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import { ProfileApi } from '../../api/api';
import Loader from '../Loader/Loader';
import './Profile.scss';

const Profile = (props) => {
    const userId = props.match.params.userId || 1;
    const [profile, setProfile] = useState(null);

    // Get Profile
    useEffect(() => {
        ProfileApi.getProfile(userId)
        .then(profile => {
            setProfile(profile.data);
        })
    }, [userId]);
    

    if(!profile) {
        return <Loader />
    }

    return (
        <div className="profile">
            <div className="profile__avatar">
                <img src={profile.avatar} alt="avatar"/>
            </div>
            <div className="profile__subtitle">
                Name:
            </div>
            <h1 className="profile__name">
                {profile.first_name + " " + profile.last_name}
            </h1>
            <div className="profile__subtitle">
                Email:
            </div>
            <div className="profile__email">
                {profile.email}
            </div>
        </div>
    );
}

export default withRouter(Profile);