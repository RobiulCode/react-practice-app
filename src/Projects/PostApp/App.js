import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './Main/Main';
import NotFound from './NoFound/NotFound';
import PostDetails from './PostDetails/PostDetails';

const PostApp = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Main/>}></Route>
                <Route path='/main' element={<Main/>}></Route>
                <Route path='/posts/:id' element={<PostDetails/>}></Route>
                <Route path='*' element={<NotFound/>}></Route>
            </Routes>
        </div>
    );
};

export default PostApp;