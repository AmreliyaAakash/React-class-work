import { useState, } from 'react';
function Counter() {

    let [counter, setCounter] = useState(0);

    if (counter < 0) {
        setCounter(0);
    }
    if (counter > 50) {
        setCounter(50);
    }   

    let increment = () => {
        setCounter(counter + 1);
    }

    let decrement = () => {
        setCounter(counter - 1);
    }

    let reset = () => {
        setCounter(0);
    }

    return (
        <div className='flex flex-col items-center justify-center h-screen bg-slate-500/100'>
            <h1 className='text-3xl font-bold mb-4'>Counter</h1>
            <h2 className='text-xl mb-4'>Counter Value : {counter}</h2>
            <div className='flex gap-4 flex-row items-center justify-center'>  
                <button className=' text-slate-950 rounded px-4 py-2 bg-cyan-500 shadow-lg shadow-cyan-500/50 hover:bg-cyan-600' onClick={increment}>Increment</button>
                <button className=' text-slate-950 rounded px-4 py-2 bg-red-500 shadow-lg shadow-red-500/50 hover:bg-red-600' onClick={decrement}>Decrement</button>
                <button className=' text-slate-950 rounded px-4 py-2 bg-sky-50 shadow-lg shadow-sky-50 hover:bg-sky-50' onClick={reset}>Reset</button>
            </div>
        </div>
    )
}

export default Counter;
