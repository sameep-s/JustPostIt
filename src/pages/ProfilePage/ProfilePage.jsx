import React from 'react';
import { LeftSidebar, RightSidebar, UserProfile } from '../../components';
import './profilePage.css';

const ProfilePage = () => {
    return (
        <>
            <main className='container__main__profilePage flex jc-center'>
                <LeftSidebar />
                <div className="container__inner__profilePage">
                    <div className='heading p-2'>Profile</div>
                    {/* userProfile */}
                    <UserProfile />
                    <div className="user__profile__tweetArea p-2 flex jc-center a-item-center">
                        <span className='txt-gray h-4'> No-Tweets Here</span>
                    </div>
                </div>
                <RightSidebar />
            </main>
        </>
    );
};

export default ProfilePage;