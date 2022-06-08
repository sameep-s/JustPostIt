import React from 'react';
import { LeftSidebar, PostContainer, PostReplyContainer, RightSidebar } from '../../components';
import './post.css';

const Post = () => {
    return (
        <>
            <main className='container__main__postPage flex jc-center'>
                <LeftSidebar />
                <div className="container__inner__post">
                    <div className='heading p-2'>Post</div>

                    <div className="post__area p-1 flex flex-col a-item-center jc-center">
                        <PostContainer />
                    </div>

                    {/* postReplyContainer */}
                    <PostReplyContainer />

                </div>
                <RightSidebar />
            </main>
        </>
    )
}

export default Post;