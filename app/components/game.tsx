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
    // Filter out sets that are not yet played
    // sets = sets.filter(({ team1Score, team2Score }) => team1Score !== 0 || team2Score !== 0);
    return (
        <div className={styles.game}>
            <div className={styles.gameHeader}>
                <span style={{textAlign: "start"}}>Court {court}</span>
                <span style={{textAlign: "end"}}>{start_time?.toLowerCase()}</span>
            </div>

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

            <div className={styles.scores}>
                <div>{team_ab_score}</div>
                -
                <div>{team_cd_score}</div>
            </div>
        </div>
    );
}

