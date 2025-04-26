import React from 'react';
import styles from './game.module.css';
import { Game as GameProps } from '../types';

export default function Game({ 
    round,
    court,
    team_ab_score,
    team_cd_score,
    start_time,
    notes,
    team_a_player1,
    team_a_player2,
    team_b_player1,
    team_b_player2,
    team_c_player1,
    team_c_player2,
    team_d_player1,
    team_d_player2,
}: GameProps) {
    // Format the start time from 'HH:MM:SS' to 'HH:MM AM/PM'
    const formatTime = (time: string) => {
        const [hours, minutes] = time.split(':');
        const ampm = +hours >= 12 ? 'PM' : 'AM';
        const formattedHours = +hours % 12 || 12; // Convert to 12-hour format
        return `${formattedHours}:${minutes} ${ampm}`;
    };

    return (
        <div className={styles.game}>
            <div className={styles.gameHeader}>
                <span style={{textAlign: "start"}}>Court {court}</span>
                <span style={{textAlign: "end"}}>{formatTime(start_time?.toLowerCase())}</span>
            </div>

            {
                (team_ab_score > 0 || team_cd_score > 0) && (
                    <div className={styles.scores}>
                        <div>{team_ab_score}</div>
                        -
                        <div>{team_cd_score}</div>
                    </div>
                )
            }
            

            <div className={styles.playersContainer}>
                <div className={styles.players}>
                    {[team_a_player1, team_a_player2].join(", ")}
                    <br />
                    {[team_b_player1, team_b_player2].join(", ")}
                </div>
                <div style={{ margin: "0px 12px" }}>|</div>
                <div className={styles.players}>
                    {[team_c_player1, team_c_player2].join(", ")}
                    <br />
                    {[team_d_player1, team_d_player2].join(", ")}
                </div>
            </div>
        </div>
    );
}

