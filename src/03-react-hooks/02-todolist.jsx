import React, {useState} from 'react';

export default function App() {
    const [text, setText] = useState("")
    const [list, setList] = useState(["aa", "bb", "cc"])
    const handleDel = (index) => {
        const newList = [...list.slice(0, index), ...list.slice(index + 1)]
        setList(newList)
    }
    return (
        <div>
            <input
                onChange={(event) => {
                    setText(event.target.value)
                }}
                value={text}/>
            <button onClick={() => {
                setList([...list, text])
                setText("")
            }}>
                add
            </button>

            <ul>
                {list.map((item, index) =>
                    <li key={index}>
                        {item}
                        <button onClick={() => handleDel(index)}>
                            del
                        </button>
                    </li>)}
            </ul>

            {list.length === 0 && <div>列表空空如也~</div>}
        </div>
    );
}

