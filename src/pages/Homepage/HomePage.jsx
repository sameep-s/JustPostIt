import { faFeatherPointed, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './homePage.css';

const HomePage = () => {
    return (
        <>
            <div className="container__main__homepage flex jc-center">
                <main className="contaier__inner__homepage flex pos-rel">
                    <aside className='container__main__sidebar flex flex-col pos-stick'>
                        <div className="icon__sidebar">
                            <FontAwesomeIcon icon={faFeatherPointed} ></FontAwesomeIcon>
                        </div>
                        <div className='sidebar__links flex flex-col'>
                            <ul>
                                <li> <div> <FontAwesomeIcon icon={faHome}></FontAwesomeIcon> <span className='link__text'>Home</span> </div></li>
                                <li> <div> <FontAwesomeIcon icon={faHome}></FontAwesomeIcon> <span className='link__text'>Explore</span> </div></li>
                                <li> <div> <FontAwesomeIcon icon={faHome}></FontAwesomeIcon> <span className='link__text'>Bookmarks</span> </div></li>
                                <li> <div> <FontAwesomeIcon icon={faHome}></FontAwesomeIcon> <span className='link__text'>Notification</span> </div></li>
                                <li> <div> <FontAwesomeIcon icon={faHome}></FontAwesomeIcon> <span className='link__text'>Profile</span> </div></li>
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
                        </div>
                    </aside>

                    <div className="container__main__feed">
                        Show feed
                    </div>

                    <aside className='right__side__items'>
                        right aside.
                    </aside>

                </main>
            </div>
        </>
    );
};

export default HomePage;