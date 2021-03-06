import React from 'react';
import CreatePost from '../CreatePost/CreatePost';
import './postEditModal.css';

const PostEditModal = ({ editOverlayIsOpen, setEditOverlayIsOpen, post }) => {


    return (
        <>
            <div
                className="postEdit__ovelay__container flex jc-center a-item-center pos-fix"
                style={{
                    display: editOverlayIsOpen ? "flex" : "none",
                }}
            >
                <div className="container__main__createPost__overlay">
                    <CreatePost setPostOverlayOpen={setEditOverlayIsOpen} setEditOverlayIsOpen={setEditOverlayIsOpen} overlay edit post={post} />
                </div>

                <div
                    onClick={() => setEditOverlayIsOpen(false)}
                    className="postEdit__overlay__visible pos-fix"
                ></div>
            </div>

        </>
    )
}

export default PostEditModal;