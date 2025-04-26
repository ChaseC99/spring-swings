import { Game as GameProp } from "../types";
import Game from "./game";

type GamesListProps = {
    games: GameProp[];
    onGameClick?: (gameId: number) => void;
}

export default function GamesList({games, onGameClick}: GamesListProps) {
    return (
        <div style={{display: "flex", gap: 12, flexDirection: "column", margin: "0"}}>
            {games.map((game: GameProp, i: number) => (
                <div key={i} onClick={() => onGameClick && onGameClick(game.game_id)}>
                    <Game key={i} {...game} />
                </div>
            ))}
        </div>
    );
}