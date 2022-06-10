import React from 'react';
import './postOptionsOverlay.css';

const PostOptionsOverlay = ({ setPostOptionsIsOpen }) => {
    return (
        <>
            <div className="optionsModalContainer">
                <div className="optionsModal flex pos-abs">
                    <div
                        className="option"
                        style={{ color: "var(--danger)" }}
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