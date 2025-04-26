"use client"
import React, { useState } from "react";
import Schedule from "../components/schedule";
import ScoreInput from "../components/score-input";
import { updateGameScore, useGames } from "../supabaseFunctions";
import { Box, Modal } from "@mui/material";

export default function Home() {
    const {data: games, refetch: refetchGames} = useGames();

    const [selectedGame, setSelectedGame] = useState<number | null>(null);
    const [showEditModal, setShowEditModal] = useState(false);
    const [teamABScoreInput, setTeamABScoreInput] = useState<string>('');
    const [teamCDScoreInput, setTeamCDScoreInput] = useState<string>('');

    const currentGame = games.find((g: any) => g.game_id === selectedGame);

    const onGameClick = (gameId: number) => {
        const game = games.find((g: any) => g.game_id === gameId);
        if (game) {
            setSelectedGame(gameId);
            setTeamABScoreInput(game.team_ab_score?.toString() ?? '');
            setTeamCDScoreInput(game.team_cd_score?.toString() ?? '');
            setShowEditModal(true);
        }
    }

    const onCloseModal = () => {
        setShowEditModal(false);
        setSelectedGame(null);
        setTeamABScoreInput(''); // Reset scores on close
        setTeamCDScoreInput('');
    }

    const handleSaveScore = async () => {
        if (selectedGame) {
            // Validate inputs
            const teamABScore = parseInt(teamABScoreInput);
            const teamCDScore = parseInt(teamCDScoreInput);
            if (isNaN(teamABScore) || isNaN(teamCDScore) || teamABScore < 0 || teamCDScore < 0) {
                alert("Please enter valid scores.");
                return;
            } 

            await updateGameScore(selectedGame, teamABScore, teamCDScore);
            refetchGames(); // Refetch games after updating
            onCloseModal();
        }
    }

    return (
        <div>
            <div style={{ textAlign: "center", margin: "16px 8px 24px 8px" }}>
                <h1>Edit Scores</h1>
                <p>Click on a game to update the score.</p>
                <p>Please don't share this link.</p>
                <p>There is no password required to edit scores.</p>
            </div>
            <Schedule games={games} loading={games.length == 0} onGameClick={onGameClick}/>
            
            <Modal
                open={showEditModal}
                onClose={onCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modalStyle}>
                    {currentGame && (
                        <>
                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                <h2>Edit Score</h2>
                                <em>Game ID: {currentGame.game_id}</em>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                                <ScoreInput
                                    players_a={`${currentGame.team_a_player1}, ${currentGame.team_a_player2}`}
                                    players_b={`${currentGame.team_b_player1}, ${currentGame.team_b_player2}`}
                                    score={teamABScoreInput}
                                    onChange={setTeamABScoreInput}
                                />
                                <hr style={{ margin: '16px 0' }} />
                                <ScoreInput 
                                    players_a={`${currentGame.team_c_player1}, ${currentGame.team_c_player2}`}
                                    players_b={`${currentGame.team_d_player1}, ${currentGame.team_d_player2}`}
                                    score={teamCDScoreInput}
                                    onChange={setTeamCDScoreInput}
                                />
                            </div>
                            <div style={buttonContainerStyle}>
                                <button onClick={onCloseModal} style={{ ...buttonStyle, backgroundColor: '#aaa' }}>Cancel</button>
                                <button onClick={handleSaveScore} style={buttonStyle}>Save</button>
                            </div>
                        </>
                    )}
                </Box>
            </Modal>
        </div>
    );
}

// Basic Modal Styles (consider moving to a CSS module)
const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '95vw',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
 };

const buttonContainerStyle: React.CSSProperties = {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    gap: '10px',
};

const buttonStyle: React.CSSProperties = {
    padding: '8px 16px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: '#007bff',
    color: 'white',
};
