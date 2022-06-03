import React from 'react';
import './rightSidebar.css'

const RightSidebar = () => {
    return (
        <>
            <aside className='right__side__items'>
                <div className="right__side__container__main flex a-item-center jc-center flex-col">
                    <div className="right__side__search__bar">
                        <input type="text" placeholder='Enter the UserName to Search' className='input-txt' name="" id="" />
                    </div>

                    <div className="container__followSuggestions flex flex-col a-item-center jc-center">
                        <div className="heading__followSuggestions flex a-item-center">
                            <span>Who To Follow</span>
                        </div>

                        <div className="user__list__item__container p-1">
                            <div className="user__listItem flex">
                                <div className="user__listItem__img">
                                    <img
                                        className='avatar'
                                        src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                                        alt="user__avatar"
                                    />
                                </div>



                                <div className="user__listItem__info__container flex">
                                    <div className="user__listItem__info">
                                        <div className="user__listItem__name">Sameep Sharma</div>
                                        <div className="user__listItem__userName txt-gray">@_sameep_</div>
                                    </div>

                                    <button className='btn btn-primary'>Follow+</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default RightSidebar;