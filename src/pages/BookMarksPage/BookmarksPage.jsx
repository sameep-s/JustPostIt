import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { LeftSidebar, RightSidebar } from '../../components';
import { getBookmarks } from '../../features/bookmarkSlice';
import './bookmarkPage.css';

const BookmarksPage = () => {

    const bookmarksState = useSelector((state) => state.bookmarks);
    const authState = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const { bookmarks } = bookmarksState;
    const { encodedToken } = authState;


    useEffect(() => {
        dispatch(getBookmarks({ encodedToken }));

    }, []);

    return (
        <>
            <main className='container__main__bookmarkPage flex jc-center'>
                <LeftSidebar />
                <div className="container__inner__bookmark">
                    <div className='heading p-2'>Bookmarks</div>

                    <div className="bookmark__area h-5 txt-gray p-1 flex flex-col a-item-center jc-center">
                        {bookmarks.length === 0 ? "No Bookmarks" : "Something's here"}
                    </div>
                </div>
                <RightSidebar />
            </main>
        </>
    )
}

export default BookmarksPage;