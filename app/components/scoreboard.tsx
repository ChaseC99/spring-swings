"use client";
import React from 'react';
import styles from './scoreboard.module.css';
import { TeamWins } from '../types';
import Latte from './latte';

type ScoreboardProps = {
    teamWins: TeamWins[];
    loading: boolean;
};

export default function Scoreboard({ teamWins, loading }: ScoreboardProps) {
    const setOfTeamWins = new Set(teamWins.map(({ wins }) => wins));
    const teamWinsArray = Array.from(setOfTeamWins).sort((a, b) => a - b);

    return (
        <div className={styles.scoreboardContainer}>
            {teamWins.map((teamWins, i) => (
                <Latte key={i} teamWins={teamWins} heightMultiplier={teamWinsArray.indexOf(teamWins.wins)+1}/>
            ))}
        </div>
    );
};