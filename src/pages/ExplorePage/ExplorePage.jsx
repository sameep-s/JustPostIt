import React, { useEffect } from 'react';
import './explorePage.css';
import { LeftSidebar, PostContainer, RightSidebar } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from '../../features/postSlice';

const ExplorePage = () => {

    const dispatch = useDispatch();
    const postState = useSelector((state) => state.post);
    const { posts } = postState;

    useEffect(() => {

        dispatch(getAllPosts());
    }, []);

    return (
        <>
            <main className='container__main__explore flex jc-center'>
                <LeftSidebar />

                <div className='container__inner__explore '>
                    <div className="page__heading p-2">
                        Explore
                    </div>

                    <div className="container__explore__options flex txt-gray">
                        <div className="explore__option p-2" style={{
                            borderBottom: ".5rem solid var(--primary)",
                            color: "black"
                        }}>
                            <div>
                                All
                            </div>
                        </div>

                        <div className="explore__option p-2 txt-gray">
                            <div>
                                Latest
                            </div>
                        </div>

                        <div className="explore__option p-2 txt-gray">
                            <div>
                                Trending
                            </div>
                        </div>

                        <div className="explore__option p-2 txt-gray">
                            <div>
                                Oldest
                            </div>
                        </div>
                    </div>

                    <div className="explore__content__area p-2 flex flex-col a-item-center">
                        <span className='h-5 txt-gray'>
                            {posts?.length === 0 ? "Nothing here!!" :
                                [...posts].map((post) => <PostContainer key={post._id} post={post} />)
                            }
                        </span>
                    </div>
                </div>

                <RightSidebar />
            </main>
        </>
    );
};

export default ExplorePage;