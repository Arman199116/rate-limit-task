import { useEffect, useState } from 'react';
import './App.css';
import { useDebounce } from './hooks/debounse';
import { useGetUserQuery } from './redux/rate-limit-api';

function App() {

    let [str, setStr] = useState('10');
    const debounsed = useDebounce(str);
    let {data, isError, isLoading} = useGetUserQuery('');

    
        setStr('');
        
   

    return (
        <div className="App">
            hello
        </div>
    );
}

export default App;
