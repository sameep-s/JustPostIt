import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LeftSidebar, PostContainer, RightSidebar, UserProfile } from '../../components';
import { getAllPosts, getUserPost } from '../../features/postSlice';
import './profilePage.css';

const ProfilePage = () => {


    const user = JSON.parse(localStorage.getItem('userSocial'));

    const dispatch = useDispatch();
    const postState = useSelector((state) => state.post);
    const { posts } = postState;

    const postsUser = posts.filter((item) => item.username === user.username);

    useEffect(() => {

        dispatch(getAllPosts());
    }, []);

    return (
        <>
            <main className='container__main__profilePage flex jc-center'>
                <LeftSidebar />
                <div className="container__inner__profilePage">
                    <div className='heading p-2'>Profile</div>

                    {/* userProfile */}
                    <UserProfile />

                    <div className="user__profile__tweetArea p-2 flex flex-col jc-center a-item-center">
                        {
                            postsUser?.length === 0 ?
                                <span className='txt-gray h-4'> No-Tweets Here</span>
                                :
                                [...postsUser]?.reverse().map((post) => <PostContainer key={post._id} post={post} />)
                        }
                    </div>
                </div>
                <RightSidebar />
            </main>
        </>
    );
};

export default ProfilePage;