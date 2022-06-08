import React, { useState } from 'react';
import { faArrowRightFromBracket, faBell, faBookmark, faFeatherPointed, faHashtag, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './leftSidebar.css';
import { Link, NavLink } from 'react-router-dom';
import CreatePost from '../CreatePost/CreatePost';


const LeftSidebar = () => {

    const [postOverlayIsOpen, setPostOverlayIsOpen] = useState(false)

    function styleActiveNav({ isActive }) {
        return {
            fontWeight: isActive ? "bolder" : "",
            color: isActive ? "var(--primary)" : "",
            backgroundColor: isActive ? "blue" : "",
        }
    }

    return (
        <>
            <aside className='container__main__sidebar flex flex-col pos-stick'>
                <div className="icon__sidebar">
                    <Link to={'/home'}>
                        <FontAwesomeIcon icon={faFeatherPointed} ></FontAwesomeIcon>
                    </Link>
                </div>
                <div className='sidebar__links flex flex-col'>
                    <ul>

                        <NavLink to={"/home"} style={styleActiveNav}>
                            <li> <div> <FontAwesomeIcon icon={faHome} /> <span className='link__text'>Home</span> </div></li>
                        </NavLink>

                        <NavLink to={"/explore"} style={styleActiveNav}>
                            <li> <div> <FontAwesomeIcon icon={faHashtag}></FontAwesomeIcon> <span className='link__text'>Explore</span> </div></li>
                        </NavLink>

                        <NavLink to={"/notificationPage"} style={styleActiveNav}>
                            <li> <div> <FontAwesomeIcon icon={faBell}></FontAwesomeIcon> <span className='link__text'>Notification</span> </div></li>
                        </NavLink>

                        <NavLink to={"/bookmarksPage"} style={styleActiveNav}>
                            <li> <div> <FontAwesomeIcon icon={faBookmark}></FontAwesomeIcon> <span className='link__text'>Bookmarks</span> </div></li>
                        </NavLink>

                        <NavLink to={"/profile"} style={styleActiveNav}>
                            <li> <div> <FontAwesomeIcon icon={faUser}></FontAwesomeIcon> <span className='link__text'>Profile</span> </div></li>
                        </NavLink>
                    </ul>

                </div>
                <button
                    className="sidebar__action__buutton btn btn-primary"
                    onClick={() => setPostOverlayIsOpen(!postOverlayIsOpen)}
                >
                    Post
                </button>

                <div className="profile__container flex a-item-center">
                    <img
                        className='avatar'
                        src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                        alt="user__avatar"
                    />
                    <div className="user__name">SAMEEP</div>
                    <span><FontAwesomeIcon icon={faArrowRightFromBracket} /></span>
                </div>
            </aside>

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
    )
}

export default LeftSidebar;