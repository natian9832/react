import React, {useRef, useState} from 'react';

export default function App() {
    const [list, setList] = useState(["aa", "bb", "cc"])
    const text = useRef()
    const handleDel = (index) => {
        const newList = [...list.slice(0, index), ...list.slice(index + 1)]
        setList(newList)
    }
    const handleAdd = () => {
        console.log(text.current["value"])
        setList([...list, text.current["value"]])
        text.current["value"] = ""
    }
    return (
        <div>
            <input ref={text}/>
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

