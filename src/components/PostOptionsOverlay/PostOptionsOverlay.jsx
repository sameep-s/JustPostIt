import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './postOptionsOverlay.css';
import { deletePost } from '../../features/postSlice';
import PostOverlay from '../PostOverlay/PostOverlay';

const PostOptionsOverlay = ({ setPostOptionsIsOpen, postId }) => {

    const [overlayIsOpen, setOverlayIsOpen] = useState(false);


    const dispatch = useDispatch();

    function deletePostHandler() {
        console.log(`delete`);
        dispatch(deletePost(postId));
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
                        onClick={() => setOverlayIsOpen(true)}
                        style={{ color: "var(--dark-primary)" }}

                    >EDIT</div>
                </div>

                <div
                    onClick={() => setPostOptionsIsOpen(false)}
                    className="colorPaletteOverlay pos-fix"></div>
            </div>

            <PostOverlay postOverlayOpen={overlayIsOpen} setPostOverlayOpen={setOverlayIsOpen} edit />

        </>
    )
}

export default PostOptionsOverlay;