import React from 'react';
import './postReplyOverlay.css';
import PostReplyContainer from '../PostReply/PostReplyContainer';


const PostReplyOverlay = ({ replyOverlayIsOpen, setReplyOverlayIsOpen }) => {
    return (
        <>
            <div
                className="postReply__ovelay__container flex jc-center a-item-center pos-fix"
                style={{
                    display: replyOverlayIsOpen ? "flex" : "none",
                }}
            >
                <div className="container__main__PostReply__overlay">
                    <PostReplyContainer />
                </div>

                <div
                    onClick={() => setReplyOverlayIsOpen(false)}
                    className="postReply__overlay__visible pos-fix"
                ></div>
            </div>
        </>
    )
}

export default PostReplyOverlay