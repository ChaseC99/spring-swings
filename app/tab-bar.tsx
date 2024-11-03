"use client";
import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { usePathname, useRouter } from 'next/navigation';

export default function TabBar() {
    const router = useRouter();
    const path = usePathname();

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        router.push(newValue);
    };

    return (
        <div style={{position:"fixed", bottom:0, left:0, right:0}}>
            <BottomNavigation
                value={path}
                onChange={handleChange}
                sx={{
                    height: 70,
                    bgcolor: "#8d6f5a",
                    "& .Mui-selected, .Mui-selected > svg": {
                        color: "#ee8e38"
                        
                      }
                 }}
            >
                <BottomNavigationAction
                    label="Info"
                    value="/info"
                    icon={<InfoOutlinedIcon />}
                />
                <BottomNavigationAction
                    label="Schedule"
                    value="/"
                    icon={<SportsVolleyballIcon />}
                />
                <BottomNavigationAction
                    label="Me"
                    value="/me"
                    icon={<AccountCircleIcon />}
                />
            </BottomNavigation>
        </div>
    );
}