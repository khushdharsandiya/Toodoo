import React, { useState } from 'react';

export default function Toodoo() {
    const [state, setState] = useState('');
    const [data, setData] = useState(() => {
        const localData = JSON.parse(localStorage.getItem("todo"))
        return localData || []

    });
    const [editIndex, setEditIndex] = useState(null);



    function Add(el) {
        setState(el.target.value);
    }

    function Toodoo() {
        if (editIndex !== null) {
            const newData = [...data];
            newData[editIndex] = state;
            setData(newData);
            setState('');
            setEditIndex(null);
        }
        else if (state === "") {
            alert("Pela Lakh Ne Pachhi Add kar")
        } else {
            setData([...data, state]);
            setState('');
        }
    }

    function Delete(index) {
        const newData = [...data];
        newData.splice(index, 1);
        setData(newData);
    }

    function Edit(index) {
        setState(data[index]);
        setEditIndex(index);
    }

    localStorage.setItem("todo", JSON.stringify(data))
    return (
        <div>

            <input style={{ backgroundColor: "lightgreen" }} type="text" value={state} onChange={Add} />
            <button style={{ backgroundColor: "lightblue" }} onClick={Toodoo}>{editIndex !== null ? 'Update' : 'Add'}</button>
            <ul>
                {data.map((el, i) => (
                    <li key={i}>
                        {el}
                        <button style={{ backgroundColor: "green", color: "white", marginTop: "20px", marginLeft: "50px" }} onClick={() => Edit(i)}>Edit</button>
                        <button style={{ backgroundColor: "red", color: "white" }} onClick={() => Delete(i)}>Delete</button>
                    </li>
                ))}
            </ul>

        </div>
    );
}



