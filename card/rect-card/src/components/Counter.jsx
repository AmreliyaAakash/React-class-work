function Counter() {
    const [count, setCount] = React.useState(0);

    return (
        <div className='counter'>
            <p style={{ color: 'white' }}>Count: {count}</p>
            <button style={{ backgroundColor: 'lightblue' }} onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default Counter;
import React from 'react';
