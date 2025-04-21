"use client"
import Scoreboard from "./components/scoreboard";
import Schedule from "./components/schedule";
import { getGames, getTeams, getTeamWins } from "./data";
import { useEffect, useState } from "react";
import { Game, TeamWins } from "./types";

export default function Home() {
  const [games, setGames] = useState<Game[]>(
    typeof window !== 'undefined' ? JSON.parse(localStorage.getItem("games") || "[]") as Game[] : []
  );
  const [teamWins, setTeamWins] = useState<TeamWins[]>(
    games.length > 0 ? getTeamWins(games) : getTeams().map(team => ({ ...team, wins: 0, place: 4 }))
  );
  const [lastUpdated, setLastUpdated] = useState("");

  // Fetch team scores and games
  useEffect(() => {
    getGames().then(({ games, lastUpdated }) => {
      localStorage.setItem("games", JSON.stringify(games));
      setGames(games);
      setLastUpdated(lastUpdated);
      setTeamWins(getTeamWins(games));
    });
  }, []);

  return (
    <div>
      {/* <Scoreboard teamWins={teamWins} loading={games.length == 0}/> */}
      <Schedule games={games} lastUpdated={lastUpdated} loading={games.length == 0}/>
    </div> 
  );
}
