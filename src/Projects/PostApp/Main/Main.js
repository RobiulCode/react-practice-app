import axios from 'axios';
import React,{useState,useEffect} from 'react';
import {FaHackerNews } from "react-icons/fa";
import Post from '../Post/Post';

const Main = () => {
    const [posts,setPosts] = useState([])
    useEffect(()=>{
        getPost()
        .catch(error => console.log(error))
    },[])
    const getPost =async()=>{
        const data = await axios('https://jsonplaceholder.typicode.com/posts')
        const loadPosts = data.data
        setPosts(loadPosts)
    }
    console.log(posts);
    return (
        <div>
            <div className="py-3 flex md:px-10 space-x-2 bg-slate-200 shadow-md">
                <FaHackerNews className='h-10 w-10 bg-blue-500 p-2 rounded-full'/>
                <span className='text-3xl text-indigo-600' >All users Post</span>
            </div>
            <div className="w-3/4 mx-auto bg-white shadow-md rounded-bottom pl-3 divide-y">
                {
                    posts.map((post)=><Post key={post.id} post={post}/>)
                }
            </div>
        </div>
    );
};

export default Main;