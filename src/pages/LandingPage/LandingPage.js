import React from 'react';
import './landingPage.css';

const LandingPage = () => {
    return (
        <>
            <main>
                <div className="container__landingPage flex">
                    <div className="banner__landingPage flex jc-center a-item-center">
                        <img
                            src="https://res.cloudinary.com/sameep1/image/upload/v1654514712/project_socialMedia/socialBanner_tf3uow.svg"
                            alt="banner__LandingPage"
                        />

                    </div>
                    <div className="container__info__landingPage p-2 flex flex-col jc-center a-item-center">
                        <div className="Text__landingPage ">

                            Join Now,
                            See What's Happening around you.
                        </div>

                        <button className='btn btn-primary'>Login</button>
                    </div>
                </div>
            </main>
        </>
    )
}

export default LandingPage;