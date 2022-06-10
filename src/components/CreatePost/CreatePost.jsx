import React, { useState } from 'react';
import './createPost.css';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { createPost, editPost } from '../../features/postSlice';


const CreatePost = ({ setPostOverlayOpen, setEditOverlayIsOpen, overlay, edit, post }) => {

    const dispatch = useDispatch();

    const placeholderImage = "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png";
    const user = JSON.parse(localStorage.getItem('userSocial'));


    const initialPostData = {
        content: edit ? post.content : "",
        username: user.username,
        displayImage: user.displayImage,
        userFirstName: user.firstName,
        userLastName: user.lastName,
    }

    const [postData, setPostData] = useState(initialPostData);

    function createPostHandler() {

        dispatch(createPost(postData));

        overlay && setPostOverlayOpen(false);
        overlay && setPostData(initialPostData);

        setPostData(initialPostData);
    }

    function editHandler() {
        const postId = post._id
        const { content, username, displayImage, userFirstName, userLastName } = postData

        dispatch(editPost({ content, username, displayImage, userFirstName, userLastName, postId }));
        setEditOverlayIsOpen(false);

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
                        placeholder={edit ? "Enter Text To edit" : "What's happening?"}
                        value={postData.content}
                        onChange={(e) => setPostData({ ...postData, content: e.target.value })}
                    />

                    <div className="post__options flex a-item-center ">
                        <div className="user__post__icons flex a-item-center ">
                            <FontAwesomeIcon className='user__post__icon' icon={faImage} />
                            <div className="user__post__icon">gif</div>
                        </div>

                        <button
                            onClick={edit ? editHandler : createPostHandler}
                            className="user__post__btn btn btn-primary">
                            {edit ? "Edit" : "Post"}
                        </button>
                    </div>
                </div>


            </div>
        </>
    )
}

export default CreatePost;