"use client"
import { use, useEffect, useState } from "react";
import PlayerPicker from "./components/player-picker";
import Schedule from "./components/schedule";
import { useGames } from "./hooks";

export default function Home() {
  const {data: games} = useGames();
  const players = Array.from(
    games.reduce((acc: Set<string>, game) => {
      acc.add(game.team_a_player1);
      acc.add(game.team_a_player2);
      acc.add(game.team_b_player1);
      acc.add(game.team_b_player2);
      acc.add(game.team_c_player1);
      acc.add(game.team_c_player2);
      acc.add(game.team_d_player1);
      acc.add(game.team_d_player2);
      return acc;
    }, new Set<string>())
  ).sort();
  const [selectedPlayer, setSelectedPlayer] = useState<string>('');

  const [filteredGames, setFilteredGames] = useState(games);

  useEffect(() => {
    if (selectedPlayer) {
      const filtered = games.filter(game => {
        return (
          game.team_a_player1 === selectedPlayer ||
          game.team_a_player2 === selectedPlayer ||
          game.team_b_player1 === selectedPlayer ||
          game.team_b_player2 === selectedPlayer ||
          game.team_c_player1 === selectedPlayer ||
          game.team_c_player2 === selectedPlayer ||
          game.team_d_player1 === selectedPlayer ||
          game.team_d_player2 === selectedPlayer
        );
      }
      );
      setFilteredGames(filtered);
    } else {
      setFilteredGames(games);
    }
  }, [selectedPlayer, games]);

  return (
    <div>
      <div style={{ padding: 8 }}>
        <PlayerPicker value={selectedPlayer} options={players} onChange={setSelectedPlayer}/>
      </div>
      <Schedule games={filteredGames} loading={games.length == 0}/>
    </div> 
  );
}

