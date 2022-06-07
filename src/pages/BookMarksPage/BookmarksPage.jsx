import React from 'react'
import { LeftSidebar, RightSidebar } from '../../components';
import './bookmarkPage.css';

const BookmarksPage = () => {
    return (
        <>
            <main className='container__main__bookmarkPage flex jc-center'>
                <LeftSidebar />
                <div className="container__inner__bookmark">
                    <div className='heading p-2'>Bookmarks</div>

                    <div className="bookmark__area h-5 txt-gray p-1 flex flex-col a-item-center jc-center">
                        Nothing Here
                    </div>
                </div>
                <RightSidebar />
            </main>
        </>
    )
}

export default BookmarksPage;