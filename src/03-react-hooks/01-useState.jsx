import React, {useState} from 'react';

export default function App() {
    const [name, setName] = useState("那天")
    const [age, setAge] = useState(27)

    return (
        <div>
            <button onClick={() => {
                setName(name === "那天" ? "酒敬天" : "那天")
                setAge(28)
            }}>
                click
            </button>
            app-{name}-{age}
        </div>
    );
}

