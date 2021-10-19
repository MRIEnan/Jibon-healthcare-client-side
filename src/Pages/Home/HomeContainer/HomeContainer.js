import React from 'react';
import Services from '../../Shared/Services/Services';
import HomeHeader from '../HomeHeader/HomeHeader';

const HomeContainer = () => {
    return (
        <div>
            <HomeHeader></HomeHeader>
            <Services></Services>
        </div>
    );
};

export default HomeContainer;