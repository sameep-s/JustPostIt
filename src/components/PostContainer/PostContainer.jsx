import React, { useState } from 'react';
import './postContainer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faShareNodes, faHeart, faBookmark, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import PostReplyOverlay from '../PostReplyOverlay/PostReplyOverlay';
import PostOptionsOverlay from '../PostOptionsOverlay/PostOptionsOverlay';
import PostEditModal from '../PostEditModal/PostEditModal';
import { useDispatch, useSelector } from 'react-redux';
import { dislikePost, likePost } from '../../features/postSlice';
import { addBookmark, removeBookmark } from '../../features/bookmarkSlice';
import { BookFilled, BookOutlined, CommentOutlined, HeartFilled, HeartOutlined, ShareAltOutlined } from '@ant-design/icons';


const PostContainer = ({ post }) => {
    const placeholderImage = "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png";
    const user = JSON.parse(localStorage.getItem('userSocial'));
    const postId = post._id;

    const [replyOverlayIsOpen, setReplyOverlayIsOpen] = useState(false);
    const [postOptionsIsOpen, setPostOptionsIsOpen] = useState(false);
    const [editOverlayIsOpen, setEditOverlayIsOpen] = useState(false)


    const dispatch = useDispatch();
    const { bookmarks } = useSelector((state) => state.bookmarks);
    const { posts } = useSelector((state) => state.post)


    function isPresentInBookmarks() {
        return bookmarks?.filter((item) => item._id === postId).length !== 0
    }

    function isPresentInLiked() {
        return posts?.filter((item) => item._id === postId)[0].likes?.likedBy[0]?.username === user.username;
    }


    function likeDislikeHandler() {
        isPresentInLiked() ? dispatch(dislikePost(postId)) : dispatch(likePost(postId));
    }

    function bookmarkHandler() {
        isPresentInBookmarks() ? dispatch(removeBookmark(postId)) : dispatch(addBookmark(postId));
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
                    <div className="post__body__userInfo flex  a-item-center">
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

                    <div className="post__body__content">
                        {post.content}
                    </div>

                    <div className="user__post__actions flex jc-space-btw">

                        <div className='post__actions__icons__div flex jc-center a-item-center'>
                            {isPresentInLiked() ? <HeartFilled className='liked' onClick={likeDislikeHandler} /> : <HeartOutlined onClick={likeDislikeHandler} />}
                            <span className='txt-gray liked' >{posts?.filter((item) => item._id === postId)[0].likes?.likeCount || ""}</span>
                        </div>

                        <div className='post__actions__icons__div flex jc-center a-item-center'>
                            <CommentOutlined />
                        </div>

                        <div className='post__actions__icons__div flex jc-center a-item-center'>
                            <ShareAltOutlined />
                        </div>

                        <div className='post__actions__icons__div flex jc-center a-item-center'>
                            {isPresentInBookmarks() ? <BookFilled onClick={bookmarkHandler} /> : <BookOutlined onClick={bookmarkHandler} />}
                        </div>
                    </div>
                </div>


                {/* postReply overlay */}
                <PostReplyOverlay {...{ replyOverlayIsOpen, setReplyOverlayIsOpen, post }} />
                <PostEditModal {...{ editOverlayIsOpen, setEditOverlayIsOpen, post }} />
            </div>
        </>
    )
}

export default PostContainer;