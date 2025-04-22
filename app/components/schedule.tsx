"use client";
import GamesList from "../components/games-list";
import { Game } from "../types";
import GameListLoading from "./games-list-loading";

type ScheduleProps = {
    games: Game[];
    loading: boolean;
};

export default function Schedule({ games, loading }: ScheduleProps) {
    if (loading) {
        return (
            <div style={{ padding: "0 8px" }}>
                <GameListLoading />
            </div>
        );
    }
    
    return (
        <div style={{ padding: "0 8px" }}>
            <GamesList games={games} />
        </div>
    );
}