import React, {useRef, useState} from 'react';

export default function App() {
    const [count, setCount] = useState(0)
    let count1 = useRef(0)
    return (
        <div>
            <button onClick={() => {
                setCount(count + 1)
                count1.current++
            }}>add
            </button>
            {count}-{count1.current}
        </div>
    );
}

