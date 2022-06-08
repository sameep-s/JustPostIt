import React from 'react';
import CreatePost from '../CreatePost/CreatePost';
import './postOverlay.css';

const PostOverlay = ({ postOverlayIsOpen, setPostOverlayIsOpen }) => {
    return (
        <>
            <div
                className="post__ovelay__container flex jc-center a-item-center pos-fix"
                style={{
                    display: postOverlayIsOpen ? "flex" : "none",
                }}
            >
                <div className="container__main__createPost__overlay">
                    <CreatePost />
                </div>

                <div
                    onClick={() => setPostOverlayIsOpen(false)}
                    className="post__overlay__visible pos-fix"
                ></div>
            </div>

        </>
    );
};

export default PostOverlay;