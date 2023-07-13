import React from 'react';
import { Grid, Paper } from '@mui/material';
import Sidebar
 from './Sidebar';
import ChatBox from './ChatBox';

const MainPage = () => {
    return (
        <>
                    <Grid item xs={3} sx={{backgroundColor: "#062157"}}>
                <Paper elevation={2} sx={{ margin: "10px", height: "100%", backgroundColor: "#062157" }}>
                <Sidebar/>
                </Paper>
            </Grid>
            <Grid item xs={9}>
                <ChatBox />
            </Grid>
        </>
    );
};

export default MainPage;