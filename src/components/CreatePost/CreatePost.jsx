import React from 'react';
import './createPost.css';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CreatePost = () => {
    return (
        <>
            <div className="user__post__add__conatainer flex">
                <div className="user__avatar">
                    <img
                        className='avatar'
                        src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                        alt="user__avatar"
                    />
                </div>

                <div className="user__action__contianer">
                    <textarea className='post__textarea' placeholder="What's happening?" ></textarea>
                    <div className="post__options flex a-item-center ">
                        <div className="user__post__icons flex  ">
                            <FontAwesomeIcon className='user__post__icon' icon={faImage} />
                            <div className="user__post__icon">gif</div>
                        </div>

                        <button className="user__post__btn btn btn-primary">
                            Post
                        </button>
                    </div>
                </div>


            </div>
        </>
    )
}

export default CreatePost;