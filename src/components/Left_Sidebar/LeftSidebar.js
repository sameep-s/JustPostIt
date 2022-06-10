import React, { useState } from 'react';
import { faArrowRightFromBracket, faBell, faBookmark, faFeatherPointed, faHashtag, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './leftSidebar.css';
import { Link, NavLink } from 'react-router-dom';
import PostOverlay from '../PostOverlay/PostOverlay';
import LogoutOverlay from '../LogoutOverlay/LogoutOverlay';

const placeholderImage = "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png";

const LeftSidebar = () => {

    const [postOverlayIsOpen, setPostOverlayIsOpen] = useState(false);
    const [logoutOverlayIsOpen, setLogoutOverlayIsOpen] = useState(false);

    const user = JSON.parse(localStorage.getItem('userSocial'));

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
                        src={user.displayImage || placeholderImage}
                        alt="user__avatar"
                    />
                    <div className="user__name">{user.firstName}</div>
                    <span><FontAwesomeIcon onClick={() => setLogoutOverlayIsOpen(true)} icon={faArrowRightFromBracket} /></span>
                </div>
            </aside>

            {/* postoverlayContainer */}
            <PostOverlay postOverlayOpen={postOverlayIsOpen} setPostOverlayOpen={setPostOverlayIsOpen} />
            <LogoutOverlay {...{ logoutOverlayIsOpen, setLogoutOverlayIsOpen }} />
        </>
    )
}

export default LeftSidebar;