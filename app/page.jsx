"use client"

// React components
import { useState } from "react";

// Custom components
import Form from "@/components/Form.jsx";
import Result from "@/components/Result";

import { calculate } from "@/utility/helpers" // I added this function beforehand

export default function Home() {

    const [ score, setScore ] = useState(0);

    function calculateScore() {
        alert("hi");
    }

    return (
        <main style={{
            padding: 100,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 10
        }}>
            <img
                src="/images/teddy.png"
                alt="Insanely built teddy hauling an inordinately large domino (not the pizza)"
                style={{ width: 100 }} />
            <h1>Hello 👋</h1>
            <Form handleCalculate={calculateScore} />
            <Result score={0} />
        </main>
    )
}
