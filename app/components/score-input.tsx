"use client";
import React from 'react';

type ScoreInputProps = {
    score: string;
    players_a: string;
    players_b: string;
    onChange: (value: string) => void;
}

export default function ScoreInput({ score, players_a, players_b, onChange }: ScoreInputProps) {
    return (
        <div style={{ margin: '16px 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <input
                type="tel"
                value={score}
                onChange={(e) => onChange(e.target.value)}
                onFocus={(e) => e.target.select()}
                style={inputStyle}
            />
            <p>{players_a}</p>
            <p>{players_b}</p>
        </div>
    )
};

const inputStyle: React.CSSProperties = {
    margin: '8px 0',
    padding: '4px 8px',
    height: '60px',
    width: '80%',
    borderRadius: '8px',
    backgroundColor: '#f0f0f0',
    color: 'black',
    fontSize: '2em',
    textAlign: 'center',
};