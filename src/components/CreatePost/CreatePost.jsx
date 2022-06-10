import React, { useState } from 'react';
import './createPost.css';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { createPost } from '../../features/postSlice';


const CreatePost = ({ setPostOverlayIsOpen, overlay }) => {

    const dispatch = useDispatch();

    const placeholderImage = "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png";
    const user = JSON.parse(localStorage.getItem('userSocial'));


    const initialPostData = {
        content: "",
        username: user.username,
        displayImage: user.displayImage,
        userFirstName: user.firstName,
        userLastName: user.lastName,
    }

    const [postData, setPostData] = useState(initialPostData);

    function createPostHandler() {
        console.log(`postData`, postData);

        dispatch(createPost(postData));

        overlay && setPostOverlayIsOpen(false);
        setPostData(initialPostData);
    }


    return (
        <>
            <div className="user__post__add__conatainer flex">
                <div className="user__avatar">
                    <img
                        className='avatar'
                        src={user.displayImage || placeholderImage}
                        alt="user__avatar"
                    />
                </div>

                <div className="user__action__contianer">
                    <textarea
                        className='post__textarea'
                        placeholder="What's happening?"
                        value={postData.content}
                        onChange={(e) => setPostData({ ...postData, content: e.target.value })}
                    />

                    <div className="post__options flex a-item-center ">
                        <div className="user__post__icons flex a-item-center ">
                            <FontAwesomeIcon className='user__post__icon' icon={faImage} />
                            <div className="user__post__icon">gif</div>
                        </div>

                        <button
                            onClick={createPostHandler}
                            className="user__post__btn btn btn-primary">
                            Post
                        </button>
                    </div>
                </div>


            </div>
        </>
    )
}

export default CreatePost;