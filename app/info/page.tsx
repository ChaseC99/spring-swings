"use client";
import styles from './page.module.css';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import ScoreboardIcon from '@mui/icons-material/Scoreboard';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import Collapsible from '../components/collapsible';
import { useTeams } from '../supabaseFunctions';

export default function Info() {
    const {teams, error, loading} = useTeams();
    console.log(teams);

    return (
        <div className={styles.infoPage}>
            <div className={styles.header}>
                <h1>Spring Swings</h1>
                <div className={styles.datetime}>
                    <img src="/logo.png" alt="Tournament logo" className={styles.headerLogo} />
                    <div>
                        <p>9am - 4pm</p>
                        <p>Sunday, April 27</p>
                    </div>
                    <img src="/logo.png" alt="Tournament logo" className={styles.headerLogo} />
                </div>

            </div>

            <a
                className={styles.linkContainer}
                style={{ justifyContent: "left", gap: "24px" }}
                target="_blank"
                rel="noopener noreferrer"
                href='https://www.google.com/maps/search/?api=1&query=Washington%2Park%2C+Sunnyvale%2C+CA+94086'
            >
                <LocationOnOutlinedIcon />
                <div style={{width: "100%"}}>
                    <p>Washington Park</p>
                    <p>840 W Washington Ave</p>
                    <p>Sunnyvale, CA 94086</p>
                </div>
            </a>

            <Collapsible title="Teams" roundedTop roundedBottom>
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
            </Collapsible>

            <div className={styles.infoBody}>
                <Collapsible title="Gameplay" roundedTop>
                    <div>
                        <div>
                            <p><strong>Exclusively 4v4 games</strong></p>
                            <ul>
                                <li>
                                    In each game, you and your partner will be put on a team with another pair. And you will play against two other pairs of partners. 
                                </li>
                            </ul>
                        </div>
                        <br />
                        <div>
                            <p><strong>Meet as many different teams as possible.</strong></p>
                            <ul>
                                <li>{"This will be more of a 'mixer' event."}</li>
                                <li>The goal is that you will play with and against as many teams as possible throughout the day. </li>
                            </ul>
                        </div>
                    </div>
                </Collapsible>

                <Collapsible title="Court Setup">
                    <p>
                        Full sized court, co-ed height
                    </p>
                </Collapsible>

                <Collapsible title="Game Scoring">
                    <ul>
                        <li>Each game will be just 1 set to 25 points (must win by 2, no hard cap).</li>
                        <li>The pair with the most games won at the end will be the winner of the tournament!</li>
                    </ul>
                </Collapsible>

                <Collapsible title="Game Rules">
                    <div>
                        <p>No jump serves</p>
                        <p>{"There's a broad range of skill levels amongst everyone, so the recommendation is that you hold yourself to your own standards/expectations when it comes to calls for doubles, lift, net touches, etc."}</p>
                        <br />
                        <p>{"Might be a good idea to go over expectations (e.g. open hand receives) before each match, especially if you think it's going to be a competitive game."}</p>
                        <br />
                        <p>When in doubt, you can always redo a point 🙂</p>
                    </div>
                </Collapsible>

                <Collapsible title="House Rules!">
                    <div>
                        <p><strong>No touch ace == Steal a point</strong></p>
                        <p>{"If you get an ace where the other team doesn't even touch the ball before the ball touches the ground, not only do you get a point, but the other team LOSES a point."}</p>
                    </div>
                    <br />
                    <div>
                        <p><strong>Give up the ball == Give up the point</strong></p>
                        <p>{"Let's say you just won a point and the ball is on your side of the court. If for some reason you roll/toss/kick the ball to the other side of the court, the previous point is voided and the other team serves. (The other team does not win a point though)."}</p>
                    </div>
                </Collapsible>

                <Collapsible title="Common Volleyball Rules" roundedBottom>
                    <ul>
                        <li>NO open hand serves receive.</li>
                        <li>NO open hand receives on free ball OR during rallies.</li>
                        <li>OK to open hand receive for hard driven.</li>
                        <li>OK to set over the net with 2 hands (as long as shoulders square with direction) otherwise NO.</li>
                        <li>OK to cross other side of the net during the play as long as not interrupting the game.</li>
                    </ul>
                </Collapsible>
            </div>

            <div className={styles.whatToBringContainer}>
                <h2>What to Bring</h2>
                <ul className={styles.twoColumnList}>
                    <li>🏐 Volleyball</li>
                    <li>💦 Plenty of water</li>
                    <li>🧴 Sunscreen</li>
                    <li>🍌 Snacks</li>
                    <li>🧦 Extra socks</li>
                    <li>🪑 Lawn chairs</li>
                    <li>⚡️ Energy</li>
                    <li>🥳 Enthusiasm</li>
                    <li>😎 Vibes</li>
                </ul>
            </div>

            <div>
                <a
                    className={styles.linkContainer}
                    style={{ justifyContent: 'space-between', marginBottom: '12px'}}
                    target="_blank"
                    rel="noopener noreferrer"
                    href='https://www.rapidtables.com/tools/scoreboard.html'
                >
                    <p>Score Keeeper Tool</p>
                    <ScoreboardIcon />
                </a>
                {/* <a
                    className={styles.linkContainer}
                    style={{ justifyContent: 'space-between', marginBottom: '12px'}}
                    target="_blank"
                    rel="noopener noreferrer"
                    href='https://open.spotify.com/playlist/7nj68KOKSnECq23LMc4Ok8?si=iOOAEyc_S-m1NmrP_6MOQw&pt=7ee11c9e2c53ea43752aa2a75d935024&pi=w8tR7O93Qfed5'
                >
                    <p>Spotify Playlist</p>
                    <LibraryMusicOutlinedIcon />
                </a> */}
                {/* <a
                    className={styles.linkContainer}
                    style={{ justifyContent: 'space-between', marginBottom: '12px'}}
                    target="_blank"
                    rel="noopener noreferrer"
                    href='https://forms.gle/VCMnsypTr3wWXjL58'
                >
                    <p>Superlatives Voting</p>
                    <EmojiEventsIcon />
                </a> */}
                {/* <a
                    className={styles.linkContainer}
                    style={{ justifyContent: 'space-between' }}
                    target="_blank"
                    rel="noopener noreferrer"
                    href='https://docs.google.com/spreadsheets/d/1Vg6FAb7FaqgyJyjjBmjD6s6UC8SL4KwCsUYnQ0rpPk8/edit?gid=0#gid=0'
                >
                    <p>Google Sheets Schedule</p>
                    <OpenInNewIcon />
                </a> */}
            </div>
        </div>
    );
}