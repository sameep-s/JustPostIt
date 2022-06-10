import React from 'react';
import { useDispatch } from 'react-redux';
import './postOptionsOverlay.css';
import { deletePost } from '../../features/postSlice';

const PostOptionsOverlay = ({ setPostOptionsIsOpen, setEditOverlayIsOpen, editOverlayIsOpen, postId }) => {


    const dispatch = useDispatch();


    function deletePostHandler() {

        dispatch(deletePost(postId));
        setPostOptionsIsOpen(false);
    }

    function postEditHandler() {
        setEditOverlayIsOpen(true);
        console.log(`handler`, editOverlayIsOpen);
        setPostOptionsIsOpen(false);
    }

    return (
        <>
            <div className="optionsModalContainer">
                <div className="optionsModal flex pos-abs">
                    <div
                        className="option"
                        style={{ color: "var(--danger)" }}
                        onClick={deletePostHandler}
                    >
                        DELETE
                    </div>


                    <div
                        className="option"
                        style={{ color: "var(--dark-primary)" }}
                        onClick={postEditHandler}
                    >
                        EDIT
                    </div>
                </div>

                <div
                    onClick={() => setPostOptionsIsOpen(false)}
                    className="optionsOverlay pos-fix"></div>
            </div>
        </>
    )
}

export default PostOptionsOverlay;