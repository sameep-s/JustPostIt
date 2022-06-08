import React from 'react';
import './userProfile.css';

const UserProfile = () => {
    return (
        <>
            <div className="profile__area flex flex-col a-item-center jc-center">

                <div className="container__main__profile">

                    <div className="container__backgroundImage">
                        <img
                            src="https://res.cloudinary.com/sameep1/image/upload/v1654631226/project_socialMedia/3949076_lq0lf5.jpg"
                            alt="banner__socialMedia"
                        />
                    </div>

                    <div className="container__profilePicture flex pos-rel">
                        <img
                            src="https://res.cloudinary.com/sameep1/image/upload/v1654631646/project_socialMedia/profilePP_vtnjlt.png"
                            alt="profile_picture"
                            className='avatar-lg pos-abs'
                        />
                        <button>Edit Profile</button>
                    </div>

                    <div className="container__profile__info">
                        <div className="profile__name">
                            Sameep Sharma
                        </div>
                        <div className="profile__userName txt-gray mb-1">
                            @_sameep_
                        </div>
                        <div className="profile__userWebsite">
                            <a href="">
                                https://github.com/sameep-s/justCrossIt/blob/dev/src/pages/SignUp/Signup.jsx
                            </a>
                        </div>

                        <div className="profile__info__follow flex">
                            <div className="container__following">
                                23 <span className='txt-gray'>Following</span>
                            </div>
                            <div className="container__followers">
                                23 <span className='txt-gray'>Followers</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default UserProfile;