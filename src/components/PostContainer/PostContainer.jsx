import React, { useState } from 'react';
import './postContainer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faShareNodes, faHeart, faBookmark, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import PostReplyOverlay from '../PostReplyOverlay/PostReplyOverlay';
import PostOptionsOverlay from '../PostOptionsOverlay/PostOptionsOverlay';
import PostEditModal from '../PostEditModal/PostEditModal';

const PostContainer = (post) => {

    const [replyOverlayIsOpen, setReplyOverlayIsOpen] = useState(false);
    const [postOptionsIsOpen, setPostOptionsIsOpen] = useState(false);
    const [editOverlayIsOpen, setEditOverlayIsOpen] = useState(false)


    const placeholderImage = "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png";

    const user = JSON.parse(localStorage.getItem('userSocial'));


    return (
        <>
            <div className="post__container__main mt-2 mb-2 p-1 flex">
                <div className="user__avatar">
                    <img
                        className='avatar'
                        src={post.displayImage || placeholderImage}
                        alt="user__avatar"
                    />
                </div>

                <div className="user__post__body">
                    <div className="post__body__userInfo flex">
                        <span className="user__name__post">{post.userFirstName} {post.userLastName}</span>
                        <span className="user__id__post txt-gray ml-1">@{post.username}</span>

                        <div
                            className="icon__options pos-rel"
                            style={{ display: post.username === user.username ? "block" : "none" }}
                        >
                            <FontAwesomeIcon
                                onClick={() => setPostOptionsIsOpen(!postOptionsIsOpen)}
                                icon={faEllipsisVertical}
                            />

                            <div className="">
                                {postOptionsIsOpen && <PostOptionsOverlay {...{ setPostOptionsIsOpen, setEditOverlayIsOpen, editOverlayIsOpen }} postId={post._id} />}
                            </div>
                        </div>

                    </div>

                    <div className="post__body__content  mb-2">
                        {post.content}
                    </div>

                    <div className="user__post__actions flex jc-space-btw">
                        <FontAwesomeIcon icon={faHeart} />
                        <FontAwesomeIcon onClick={() => setReplyOverlayIsOpen(true)} icon={faComment} />
                        <FontAwesomeIcon icon={faShareNodes} />
                        <FontAwesomeIcon icon={faBookmark} />
                    </div>
                </div>


                {/* postReply overlay */}
                <PostReplyOverlay {...{ replyOverlayIsOpen, setReplyOverlayIsOpen }} />
                <PostEditModal {...{ editOverlayIsOpen, setEditOverlayIsOpen, post }} />
            </div>
        </>
    )
}

export default PostContainer;