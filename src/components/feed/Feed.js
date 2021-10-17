import React from 'react';
import './feed.css';
import Share from '../share/Share';
import Post from '../post/Post';
import { Posts } from '../../dummyData';


const feed = () => {
    return (
        <div className="feed">
             <div className="feedWrapper">
                 <p>feed page.</p>
                <Share />
                    {
                        Posts.map((p) => (<Post key={p.id} post={p} />))
                    }
            </div>
        </div>
    );
};

export default feed;