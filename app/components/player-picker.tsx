import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { usePlayers } from "../hooks";

type PlayerPickerProps = {
    value: string;
    onChange: (player: string) => void;
};

export default function PlayerPicker({ value, onChange }: PlayerPickerProps) {
    const {players} = usePlayers();

    const handleChange = (event: { target: { value: any; }; }) => {
        onChange(event.target.value);
    }

    return (
        <FormControl fullWidth>
            {
                !value && (
                    <InputLabel
                        shrink={false}
                        sx={{
                            color: "#8d6f5a",
                        }}>
                        Pick a player
                    </InputLabel>
                )
            }
            <Select
                onChange={handleChange}
                value={value}
                fullWidth
                sx={{
                    color: "black",
                    '.MuiOutlinedInput-notchedOutline': {
                        borderColor: '#8d6f5a',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#8d6f5a',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#8d6f5a',
                    },
                    '.MuiSvgIcon-root ': {
                        fill: "#8d6f5a !important",
                    }
                }}
            >
                {players.map(p => (
                    <MenuItem
                        key={p}
                        value={p}
                        sx={{ minWidth: "100%" }}
                    >
                        {p}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}