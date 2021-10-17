import React from 'react';
import './home.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';

const Home = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="homeContainer container">
                    <Sidebar/>
                    <Feed/>
                    <Rightbar/>
                </div>
            </div>
        </>
    );
};

export default Home;