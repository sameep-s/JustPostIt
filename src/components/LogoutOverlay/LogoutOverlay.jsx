import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/authSlice';
import './logoutOverlay.css';

const LogoutOverlay = ({ logoutOverlayIsOpen, setLogoutOverlayIsOpen }) => {


    const dispatch = useDispatch();

    function logoutHandler() {
        dispatch(logout());
        setLogoutOverlayIsOpen(false);
    }


    return (
        <>
            <div
                className="logout__ovelay__container flex jc-center a-item-center pos-fix"
                style={{
                    display: logoutOverlayIsOpen ? "flex" : "none",
                }}
            >
                <div className="container__main__logout__overlay flex flex-col a-item-center">
                    <div className="logout__heading h-4">Are You Sure?</div>

                    <div className="flex jc-center">
                        <button onClick={() => setLogoutOverlayIsOpen(false)} className='btn'>Cancel</button>
                        <button onClick={logoutHandler} className='btn btn-danger'>Logout</button>
                    </div>

                </div>

                <div
                    onClick={() => setLogoutOverlayIsOpen(false)}
                    className="logout__overlay__visible pos-fix"
                ></div>
            </div>
        </>
    )
}

export default LogoutOverlay;