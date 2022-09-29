import { useEffect, useState } from 'react';
import './App.css';
import { useDebounce } from './hooks/debounse';
import {useRateLimitQuery, useGetUsersQuery, useGetUserQuery, useCreateUserMutation, useUpdateUserMutation, useDeleteUserMutation } from './redux/rate-limit-api';

function App() {

    let [str, setStr] = useState('10');
    const debounsed = useDebounce(str);

    let {} = useRateLimitQuery();
    let {} = useGetUsersQuery('');
    let {} = useGetUserQuery('1');

    let [createPost, {}] = useCreateUserMutation();
    let [updatePost, {}] = useUpdateUserMutation();
    let [deletePost, {}] = useDeleteUserMutation();


    return (
        <div className="App">
            <button onClick={e => createPost()}>create post</button>
            <button onClick={e => updatePost('2')}>update post</button>
            <button onClick={e => deletePost('3')}>delete post</button>
        </div>
    );
}

export default App;
