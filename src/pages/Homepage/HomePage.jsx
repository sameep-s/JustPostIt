import React from 'react';
import { CreatePost, LeftSidebar, PostContainer } from '../../components';
import RightSidebar from '../../components/Right_sidebar/RightSidebar';
import './homePage.css';

const HomePage = () => {
    return (
        <>
            <div className="container__main__homepage flex jc-center">
                <main className="contaier__inner__homepage flex pos-rel">
                    <LeftSidebar />

                    <div className="container__main__feed">
                        {/* createPost post-container */}
                        <CreatePost />

                        <div className="container__feed__area p-2">
                            {/* post-Continer */}
                            <PostContainer />
                            <PostContainer />
                            <PostContainer />
                            <PostContainer />
                            <PostContainer />
                        </div>
                    </div>

                    <RightSidebar />
                </main>
            </div >
        </>
    );
};

export default HomePage;