import React from 'react';
import { LeftSidebar, RightSidebar } from '../../components';
import './notificationPage.css';

const NotificationPage = () => {
    return (
        <>
            <main className='container__main__notificationPage flex jc-center'>
                <LeftSidebar />
                <div className="container__inner__notification">
                    <div className='heading p-2'>Notifications</div>

                    <div className="notification__area h-5 txt-gray p-1 flex flex-col a-item-center jc-center">
                        Nothing Here
                    </div>
                </div>
                <RightSidebar />
            </main>
        </>
    );
};

export default NotificationPage;