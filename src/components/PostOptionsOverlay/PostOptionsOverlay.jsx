import React from 'react';
import { useDispatch } from 'react-redux';
import './postOptionsOverlay.css';
import { deletePost } from '../../features/postSlice';

const PostOptionsOverlay = ({ setPostOptionsIsOpen, postId }) => {


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
                        style={{ color: "var(--dark-primary)" }}

                    >EDIT</div>
                </div>

                <div
                    onClick={() => setPostOptionsIsOpen(false)}
                    className="colorPaletteOverlay pos-fix"></div>
            </div>
        </>
    )
}

export default PostOptionsOverlay;