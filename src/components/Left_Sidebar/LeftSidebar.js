import React from 'react';
import { faArrowRightFromBracket, faBell, faBookmark, faFeatherPointed, faHashtag, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './leftSidebar.css';


const LeftSidebar = () => {
    return (
        <>
            <aside className='container__main__sidebar flex flex-col pos-stick'>
                <div className="icon__sidebar">
                    <FontAwesomeIcon icon={faFeatherPointed} ></FontAwesomeIcon>
                </div>
                <div className='sidebar__links flex flex-col'>
                    <ul>
                        <li> <div> <FontAwesomeIcon icon={faHome} /> <span className='link__text'>Home</span> </div></li>
                        <li> <div> <FontAwesomeIcon icon={faHashtag}></FontAwesomeIcon> <span className='link__text'>Explore</span> </div></li>
                        <li> <div> <FontAwesomeIcon icon={faBookmark}></FontAwesomeIcon> <span className='link__text'>Bookmarks</span> </div></li>
                        <li> <div> <FontAwesomeIcon icon={faBell}></FontAwesomeIcon> <span className='link__text'>Notification</span> </div></li>
                        <li> <div> <FontAwesomeIcon icon={faUser}></FontAwesomeIcon> <span className='link__text'>Profile</span> </div></li>
                    </ul>
                </div>
                <button className="sidebar__action__buutton btn btn-primary">Post</button>

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
        </>
    )
}

export default LeftSidebar;