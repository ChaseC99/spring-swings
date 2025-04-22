"use client"
import Schedule from "./components/schedule";
import { useGames } from "./hooks";

export default function Home() {
  const {games, loading} = useGames();
  
  return (
    <div>
      {/* <Scoreboard teamWins={teamWins} loading={games.length == 0}/> */}
      <Schedule games={games} loading={games.length == 0}/>
    </div> 
  );
}
