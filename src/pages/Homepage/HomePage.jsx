import React, { useEffect } from 'react';
import './homePage.css';
import { CreatePost, LeftSidebar, PostContainer, RightSidebar } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from '../../features/postSlice';

const HomePage = () => {

    const dispatch = useDispatch();
    const postState = useSelector((state) => state.post);
    const { posts } = postState;


    useEffect(() => {
        dispatch(getAllPosts());

    }, []);

    return (
        <>
            <div className="container__main__homepage flex jc-center">
                <main className="contaier__inner__homepage flex pos-rel">
                    <LeftSidebar />
                    <div className="container__main__feed">
                        <CreatePost />
                        <div className="container__feed__area p-2">

                            {
                                posts?.length === 0 ?
                                    <div className="h-3 txt-center txt-gray">
                                        Feed Empty
                                    </div> :
                                    posts?.map((post) => <PostContainer key={post._id} {...post} />)
                            }
                        </div>
                    </div>
                    <RightSidebar />
                </main>
            </div >
        </>
    );
};

export default HomePage;