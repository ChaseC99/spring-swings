"use client";
import GamesList from "../components/games-list";
import { Game } from "../types";
import GameListLoading from "./games-list-loading";

type ScheduleProps = {
    games: Game[];
    loading: boolean;
    onGameClick?: (gameId: number) => void;
};

export default function Schedule({ games, loading, onGameClick }: ScheduleProps) {
    if (loading) {
        return (
            <div style={{ padding: "0 8px" }}>
                <GameListLoading />
            </div>
        );
    }
    
    return (
        <div style={{ padding: "0 8px" }}>
            <GamesList games={games} onGameClick={onGameClick} />
        </div>
    );
}