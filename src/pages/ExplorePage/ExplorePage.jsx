import React from 'react';
import './explorePage.css';
import { LeftSidebar, RightSidebar } from '../../components';

const ExplorePage = () => {
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
                                For You
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
                            Nothing here!!
                        </span>
                    </div>
                </div>

                <RightSidebar />
            </main>
        </>
    );
};

export default ExplorePage;