import React, {useEffect, useState} from 'react';

export default function App() {
    const [name, setName] = useState("natian")

    useEffect(() => {
        setName(name.substring(0, 1).toUpperCase() + name.substring(1))
    }, [name])
    return (
        <div>
            {name}
            <button onClick={() => {
                setName("jiujingtian")
            }}>click</button>
        </div>
    );
}

