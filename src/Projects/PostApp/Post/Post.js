import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    const {id,title,body} = post
    return (
        <div className="">
            <div className="">
                <p className='text-xl font-serif capitalize'>{title}</p>
            </div>
            <div className="py-2">
                <p className=''>{body} </p>
                <Link to={`/posts/${id}`}><button className="bg-blue-300 rounded py-0 px-3">Read more</button></Link>
            </div>
        </div>
    );
};

export default Post;