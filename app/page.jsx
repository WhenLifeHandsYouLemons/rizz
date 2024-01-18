"use client"

// React components
import { useState } from "react";

// Custom components
import Form from "@/components/Form.jsx";
import Result from "@/components/Result";

import { calculate } from "@/utility/helpers" // I added this function beforehand

export default function Home() {

    const [score, setScore] = useState("");

    function calculateScore(name, major) {
        var rizz = 0;

        if (name[0] == "S") {
            rizz += 50;
        }
        else {
            rizz -= Math.floor(Math.random() * 50);
        }

        if (major.includes("C") & major.includes("S")) {
            rizz += 50;
        }
        else {
            rizz -= Math.floor(Math.random() * 50);
        }

        setScore(rizz);
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

            <h3>Step forth weary traveller and calculate your RIZZ score!</h3>

            <br/>

            {score === "" && (
                <Form handleCalculate={calculateScore} />)
            }

            <Result score={score} />
        </main>
    )
}
