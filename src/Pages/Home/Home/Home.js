import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import Devices from '../Devices/Devices';
import Extra from '../Extra/Extra';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Devices></Devices>
            <Brands></Brands>
            <Extra></Extra>
            <Footer></Footer>
        </div>
    );
};

export default Home;