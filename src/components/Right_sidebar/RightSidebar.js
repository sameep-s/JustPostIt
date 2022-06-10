import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../features/userSlice';
import UserSuggestion from '../userSuggestion/UserSuggestion';
import './rightSidebar.css'

const RightSidebar = () => {

    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('userSocial'));
    const { users } = useSelector((state) => state.user);


    useEffect(() => {
        dispatch(getAllUsers());

    }, []);

    return (
        <>
            <aside className='right__side__items pos-stick'>
                <div className="right__side__container__main flex a-item-center jc-center flex-col">
                    <div className="right__side__search__bar">
                        <input type="text" placeholder='Enter the UserName to Search' className='input-txt' name="" id="" />
                    </div>

                    <div className="container__followSuggestions flex flex-col a-item-center jc-center">
                        <div className="heading__followSuggestions flex a-item-center">
                            <span>Who To Follow</span>
                        </div>

                        {users?.users?.length === 0 ? <h1>No Users Here</h1>

                            :
                            users?.users?.map((item) => item.username === user.username || < UserSuggestion key={item.username} {...{ item }} />)


                        }


                    </div>
                </div>
            </aside>
        </>
    )
}

export default RightSidebar;