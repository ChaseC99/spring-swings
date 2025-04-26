"use client";

import { useTeamStandings } from "../supabaseFunctions";

export default function Standings() {
    const { data: standings } = useTeamStandings();

    return (
        <div style={{ padding: "0 8px" }}>
            {standings?.length ? (
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                        <tr>
                            <th style={{ textAlign: "left" }}>Team</th>
                            <th>Wins</th>
                            <th>Points (+/-)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {standings.map(team => (
                            <tr key={team.team_id}>
                                <td>{`${team.player1}, ${team.player2}`}</td>
                                <td style={{textAlign: 'center'}}>{team.number_of_wins}</td>
                                <td style={{textAlign: 'center'}}>{team.point_difference}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No standings available.</p>
            )}
        </div>
    );
}