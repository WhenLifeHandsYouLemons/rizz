import { useState } from "react";

function Form(props) {
    const [name, setName] = useState("");

    const [major, setMajor] = useState("");

    function handleName(e) {
        setName(e.target.value);
    }

    return (
        <div>
            Name:
            <input type="text" value={name} onChange={handleName} />

            Major:
            <input type="text" value={major} onChange={(e) => {
                setName(e.target.value);
            }} />

            <button onClick={props.handleCalculate}>
                Calculate
            </button>
        </div>
    );
}

export default Form