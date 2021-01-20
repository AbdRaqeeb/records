import React, {useEffect, useContext} from 'react';
import member from '../assets/images/members-icon.png';
import ProfileContext from '../context/profiles/profileContext';


const Banner = () => {
    const profileContext = useContext(ProfileContext);

    const {size, getProfiles} = profileContext;

    useEffect(() => {
        getProfiles();

        //eslint-disable-next-line
    }, []);


    return (
        <div className="section-banner">
            {/*SECTION BANNER ICON*/}
            <img
                className="section-banner-icon"
                src={member}
                alt="members-icon"
            />
            {/*SECTION BANNER ICON*/}

            {/*SECTION BANNER TITLE*/}
            <p className="section-banner-title">Profiles ({size})</p>
            {/*SECTION BANNER TITLE*/}

            {/*SECTION BANNER TEXT*/}
            <p className="section-banner-text">
                Browse all the profiles of the community!
            </p>
            {/*SECTION BANNER TEXT*/}
        </div>
    );
};

export default Banner;