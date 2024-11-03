"use client";
import React from 'react';
import styles from './podium.module.css';
import { TeamWins } from '../types';
import { Skeleton } from '@mui/material';

type PodiumProps = {
    teamWins: TeamWins;
    heighMultiplier: number;
};

export default function Podium({ teamWins, heighMultiplier }: PodiumProps) {
    const { name, color, wins } = teamWins;
    return (
        <div>
            <div className={styles.flagContainer}>
                <div className={styles.pole}></div>
                <div className={styles.flag}>
                    <div className={styles.flagColumn} style={{backgroundColor: color, animationDelay: "0ms"}}></div>
                    <div className={styles.flagColumn} style={{backgroundColor: color, animationDelay: "100ms"}}></div>
                    <div className={styles.flagColumn} style={{backgroundColor: color, animationDelay: "200ms"}}></div>
                    <div className={styles.flagColumn} style={{backgroundColor: color, animationDelay: "300ms"}}></div>
                    <div className={styles.flagColumn} style={{backgroundColor: color, animationDelay: "400ms"}}></div>
                    <div className={styles.flagColumn} style={{backgroundColor: color, animationDelay: "500ms"}}></div>
                    <div className={styles.flagColumn} style={{backgroundColor: color, animationDelay: "600ms"}}></div>
                    <div className={styles.flagColumn} style={{backgroundColor: color, animationDelay: "700ms"}}></div>
                    <div className={styles.flagColumn} style={{backgroundColor: color, animationDelay: "800ms"}}></div>
                    <div className={styles.flagColumn} style={{backgroundColor: color, animationDelay: "900ms"}}></div>
                    <div className={styles.flagColumn} style={{backgroundColor: color, animationDelay: "1000ms"}}></div>
                    <div className={styles.flagColumn} style={{backgroundColor: color, animationDelay: "1100ms"}}></div>
                </div>
            </div>
            <div
                className={styles.podium} 
                style={{height: 50 * heighMultiplier}}
            >
                <span>
                    <strong>{wins}</strong>
                </span>
                <span>
                    win{wins === 1 ? "" : "s"}
                </span>
            </div>
            <div className={styles.teamName}>
                {name}
            </div>
        </div>
    );
};