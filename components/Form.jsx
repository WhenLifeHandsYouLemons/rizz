import { useState } from "react";

function Form(props) {
    const [name, setName] = useState("");

    const [major, setMajor] = useState("");

    function handleName(e) {
        setName(e.target.value);
    }

    function sendData(e) {
        props.handleCalculate(name, major);
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            Name:
            <input type="text" value={name} onChange={handleName} />

            Major:
            <input type="text" value={major} onChange={(e) => {
                setMajor(e.target.value);
            }} />

            <button onClick={sendData}>
                Calculate
            </button>
        </div>
    );
}

export default Form