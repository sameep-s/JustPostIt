import React from 'react';
import './homePage.css';
import { CreatePost, LeftSidebar, PostContainer, RightSidebar } from '../../components';

const HomePage = () => {
    return (
        <>
            <div className="container__main__homepage flex jc-center">
                <main className="contaier__inner__homepage flex pos-rel">
                    <LeftSidebar />
                    <div className="container__main__feed">
                        <CreatePost />
                        <div className="container__feed__area p-2">
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