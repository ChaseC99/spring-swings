"use client";
import React from 'react';
import styles from './latte.module.css';
import { TeamWins } from '../types';

type PodiumProps = {
    teamWins: TeamWins;
    heightMultiplier: number;
};

export default function Latte({ teamWins, heightMultiplier }: PodiumProps) {
    const { name, color, wins } = teamWins;
    return (
        <div>
            <div className={styles.coffeeCup}>
                <img 
                    src="/foam.png" 
                    alt="Foam" 
                    className={styles.cupFoam} 
                />
                <div className={styles.cupLid} />
                <div className={styles.cupBody} style={{ height: 50 * heightMultiplier }}>
                    <div className={styles.teamName}>
                        {name}
                    </div>
                    <div className={styles.cupSleeve}>
                        <span>
                            <strong>{wins}</strong>
                        </span>
                        <span>
                            win{wins === 1 ? "" : "s"}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};