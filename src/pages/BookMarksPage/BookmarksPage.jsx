import React from 'react'
import { useSelector } from 'react-redux';
import { LeftSidebar, PostContainer, RightSidebar } from '../../components';
import './bookmarkPage.css';

const BookmarksPage = () => {

    const bookmarksState = useSelector((state) => state.bookmarks);
    const { bookmarks } = bookmarksState;


    return (
        <>
            <main className='container__main__bookmarkPage flex jc-center'>
                <LeftSidebar />
                <div className="container__inner__bookmark">
                    <div className='heading p-2'>Bookmarks</div>

                    <div className="bookmark__area h-5 txt-gray p-1 flex flex-col a-item-center jc-center">
                        {bookmarks.length === 0
                            ?
                            "No Bookmarks"
                            :
                            bookmarks?.map((bookmark) => <PostContainer key={bookmark._id} post={bookmark} />)
                        }
                    </div>
                </div>
                <RightSidebar />
            </main>
        </>
    )
}

export default BookmarksPage;