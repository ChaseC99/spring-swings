
"use client"
import { useTeams } from "../supabaseFunctions";
import styles from "./teams.module.css";

export default function Teams() {
    const {teams, error, loading} = useTeams();
    
    return (
        <>
        <p>
                    {"Yes, in this tournament, your 'team' will be just you and your partner! But the games will be in a 4v4 format."}
                </p>
                <br />
                {loading ? (
                    <div className={styles.loadingContainer}>
                        <p>Loading...</p>
                    </div>
                ) : teams ? (
                    <table className={styles.teamsTable}>
                        <tbody>
                            {teams.map((team, index) => (
                                <tr key={index}>
                                    <td>• {team.player1}</td>
                                    <td>{team.player2}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <div className={styles.loadingContainer}>
                        <p>Error loading teams</p>
                    </div>
                )}
        </>
    )
}
