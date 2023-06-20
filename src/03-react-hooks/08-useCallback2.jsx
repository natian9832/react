import React, {useCallback, useState} from 'react';

export default function App() {
    const [text, setText] = useState("")
    const [list, setList] = useState(["aa", "bb", "cc"])
    const handleDel = useCallback((index) => {
        const newList = [...list.slice(0, index), ...list.slice(index + 1)]
        setList(newList)
    }, [list])
    const handleChange = useCallback((event) => setText(event.target.value), [])
    const handleAdd = useCallback(() => {
        setList([...list, text])
        setText("")
    }, [text, list])

    return (
        <div>
            <input
                onChange={(event) => handleChange(event)}
                value={text}/>
            <button onClick={() => handleAdd()}>
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

