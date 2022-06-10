import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { followUser, unFollowUser } from '../../features/userSlice';
import './userSuggestion.css';

const placeholderImage = "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png";
const UserSuggestion = ({ item }) => {

    const dispatch = useDispatch()
    const userState = useSelector((state) => state.user);


    function isUserFollowed() {
        return userState?.following?.filter((user) => user.username === item.username).length !== 0
    }


    function followUnfollowHandler() {
        const followUserId = item._id;

        isUserFollowed() ? dispatch(unFollowUser({ followUserId })) : dispatch(followUser({ followUserId }))
    }

    return (
        <>
            <div className="user__list__item__container p-1">
                <div className="user__listItem flex">
                    <div className="user__listItem__img">
                        <img
                            className='avatar'
                            src={item.displayImage || placeholderImage}
                            alt="user__avatar"
                        />
                    </div>



                    <div className="user__listItem__info__container flex">
                        <div className="user__listItem__info">
                            <div className="user__listItem__name">{item.firstName} {item.lastName}</div>
                            <div className="user__listItem__userName txt-gray">{item.username}</div>
                        </div>

                        <button
                            onClick={followUnfollowHandler}
                            className='btn btn-primary'
                        >{isUserFollowed() ? "Following" : "Follow+"}
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default UserSuggestion;