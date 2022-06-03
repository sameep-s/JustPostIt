import { faBell, faComment, faShareNodes, faHeart, faBookmark, faFeatherPointed, faHashtag, faHome, faImage, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import RightSidebar from '../../components/Right_sidebar/RightSidebar';
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
                        </div>
                    </aside>

                    <div className="container__main__feed">

                        {/* user post-container */}
                        <div className="user__post__add__conatainer flex">
                            <div className="user__avatar">
                                <img
                                    className='avatar'
                                    src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                                    alt="user__avatar"
                                />
                            </div>

                            <div className="user__action__contianer">
                                <textarea className='post__textarea' placeholder="What's happening?" ></textarea>
                                <div className="post__options flex a-item-center ">
                                    <div className="user__post__icons flex  ">
                                        <FontAwesomeIcon className='user__post__icon' icon={faImage} />
                                        <div className="user__post__icon">gif</div>
                                    </div>

                                    <button className="user__post__btn btn btn-primary">
                                        Post
                                    </button>
                                </div>
                            </div>


                        </div>

                        <div className="container__feed__area p-2">

                            <div className="post__container__main  p-1 flex">
                                <div className="user__avatar">
                                    <img
                                        className='avatar'
                                        src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                                        alt="user__avatar"
                                    />
                                </div>

                                <div className="user__post__body">
                                    <div className="post__body__userInfo">
                                        <span className="user__name__post">Sameep Sharma</span>
                                        <span className="user__id__post txt-gray ml-1">@_sameep_</span>
                                    </div>

                                    <div className="post__body__content">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error saepe tempora impedit dolorum aperiam, perferendis iusto repellendus corporis

                                        illo inventore, sequi beatae libero, nulla magnam.
                                    </div>

                                    <div className="user__post__actions flex jc-space-btw">
                                        <FontAwesomeIcon icon={faHeart} />
                                        <FontAwesomeIcon icon={faComment} />
                                        <FontAwesomeIcon icon={faShareNodes} />
                                        <FontAwesomeIcon icon={faBookmark} />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <RightSidebar />

                </main>
            </div >
        </>
    );
};

export default HomePage;