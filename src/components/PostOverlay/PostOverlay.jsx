import React from 'react';
import CreatePost from '../CreatePost/CreatePost';
import './postOverlay.css';

const PostOverlay = ({ postOverlayOpen, setPostOverlayOpen, edit }) => {
    return (
        <>
            <div
                className="post__ovelay__container flex jc-center a-item-center pos-fix"
                style={{
                    display: postOverlayOpen ? "flex" : "none",
                }}
            >
                <div className="container__main__createPost__overlay">
                    <CreatePost setPostOverlayOpen={setPostOverlayOpen} overlay edit={edit} />
                </div>

                <div
                    onClick={() => setPostOverlayOpen(false)}
                    className="post__overlay__visible pos-fix"
                ></div>
            </div>

        </>
    );
};

export default PostOverlay;