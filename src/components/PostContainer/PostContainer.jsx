import React, { useState } from 'react';
import './postContainer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faShareNodes, faHeart, faBookmark } from '@fortawesome/free-solid-svg-icons';
import PostReplyOverlay from '../PostReplyOverlay/PostReplyOverlay';

const PostContainer = (post) => {

    const [replyOverlayIsOpen, setReplyOverlayIsOpen] = useState(false)
    console.log(post);

    const placeholderImage = "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png";

    return (
        <>
            <div className="post__container__main mt-2 mb-2 p-1 flex">
                <div className="user__avatar">
                    <img
                        className='avatar'
                        src={post.userImage || placeholderImage}
                        alt="user__avatar"
                    />
                </div>

                <div className="user__post__body">
                    <div className="post__body__userInfo">
                        <span className="user__name__post">{post.userFirstName} {post.userLastName}</span>
                        <span className="user__id__post txt-gray ml-1">@{post.username}</span>
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
            </div>
        </>
    )
}

export default PostContainer;