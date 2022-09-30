import { useEffect, useState } from 'react';
import './App.css';
//import { useDebounce } from './hooks/debounse';
import { calculateLimit, sleep } from './functions';
import { useActions } from './redux/hooks/actions';
import {useAppSelector} from './redux/hooks/redux'
import {useRateLimitQuery, useGetUsersQuery, useGetUserQuery, useCreateUserMutation, useUpdateUserMutation, useDeleteUserMutation } from './redux/rate-limit-api';

function App() {
    let [a, setA] = useState(1);
    let limit : any = useAppSelector(state => state.auth.limit);
      
    let {addLimitRate} = useActions();
    
    let {data} = useRateLimitQuery();
    // let {} = useGetUsersQuery();
    // let {} = useGetUserQuery('1');
    //let [createUser, {}] = useCreateUserMutation();
    let [updateUser, {}] = useUpdateUserMutation();
    //let [deleteUser, {}] = useDeleteUserMutation();

    const control = async() => {
        
        for (let i = 0; i < 12; i++) {
            await updateUser('5');
            await sleep(Math.ceil(60 * 1000 / calculateLimit(limit)[3]))
        }
    }
    //https://stackoverflow.com/questions/65850544/rate-limit-the-number-of-request-made-from-react-client-to-api
    useEffect(() => {
        addLimitRate(data);
        control()
    }, [a])
        
    return (
        <div className="App">

            <button onClick={e => updateUser('2')}>update post</button>
            {/* <button onClick={e => createUser()}>create post</button>
            <button onClick={e => deleteUser('3')}>delete post</button> */}


            <button onClick={e => setA(a + 1)}>postn loopp</button>
        </div>
    );
}

export default App;
