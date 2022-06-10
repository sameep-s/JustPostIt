import React, { useState, useEffect } from 'react';
import './postContainer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faShareNodes, faHeart, faBookmark, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import PostReplyOverlay from '../PostReplyOverlay/PostReplyOverlay';
import PostOptionsOverlay from '../PostOptionsOverlay/PostOptionsOverlay';
import PostEditModal from '../PostEditModal/PostEditModal';
import { useDispatch, useSelector } from 'react-redux';
import { dislikePost, likePost } from '../../features/postSlice';
import { addBookmark, removeBookmark } from '../../features/bookmarkSlice';


const PostContainer = ({ post }) => {
    const placeholderImage = "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png";
    const user = JSON.parse(localStorage.getItem('userSocial'));
    const postId = post._id;

    const [replyOverlayIsOpen, setReplyOverlayIsOpen] = useState(false);
    const [postOptionsIsOpen, setPostOptionsIsOpen] = useState(false);
    const [editOverlayIsOpen, setEditOverlayIsOpen] = useState(false)
    const [liked, setLiked] = useState(false);
    const [bookmarked, setBookMarked] = useState(false);


    const dispatch = useDispatch();
    const { bookmarks } = useSelector((state) => state.bookmarks);


    function isPresentInBookmarks() {
        return bookmarks.filter((item) => item._id === postId).length !== 0
    }


    function likeDislikeHandler() {
        if (isPresentInBookmarks()) {
            setLiked(false);
            dispatch(dislikePost(postId))
        } else {
            dispatch(likePost(postId));
            setLiked(true)
        }

    }

    function bookmarkHandler() {
        if (bookmarked) {
            setBookMarked(false);
            dispatch(removeBookmark(postId));
        } else {
            setBookMarked(true)
            dispatch(addBookmark(postId));
        }
    }

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


                        <div className={liked ? "flex a-item-center liked" : "flex a-item-center"}> <FontAwesomeIcon
                            onClick={likeDislikeHandler} icon={faHeart} /> <span className='pl-1 h-5 txt-gray' >{post.likes.likeCount || ""}</span>
                        </div>

                        <div className=""> <FontAwesomeIcon onClick={() => setReplyOverlayIsOpen(true)} icon={faComment} /></div>
                        <div className=""> <FontAwesomeIcon icon={faShareNodes} /></div>
                        <div className={isPresentInBookmarks() ? "bookmarked" : ""}  > <FontAwesomeIcon onClick={bookmarkHandler} icon={faBookmark} /></div>
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