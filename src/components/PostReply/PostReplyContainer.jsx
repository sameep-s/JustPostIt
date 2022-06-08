import React from 'react';
import './postReplyContainer.css';

const PostReplyContainer = () => {
    return (
        <>
            <div className="post__reply m-1">
                <div className="container__main__post__reply">
                    <div className="reply__to">
                        Replying to <span>@ _sameep_</span>
                    </div>

                    <div className="reply__info flex a-item-center p-1">
                        <div className="user__img">
                            <img
                                src="https://res.cloudinary.com/sameep1/image/upload/v1654631646/project_socialMedia/profilePP_vtnjlt.png"
                                alt="userImage"
                                className='avatar'
                            />
                        </div>
                        <div className="reply__text">
                            <textarea
                                name="reply__text"
                                placeholder='Enter Your Reply'
                                id="reply__text" />
                        </div>
                    </div>
                    <div className="reply_actions flex p-1">
                        <button className='btn btn-primary'>Reply</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PostReplyContainer;