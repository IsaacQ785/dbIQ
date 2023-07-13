import { Button, Grid, Paper, TextField, Typography } from "@mui/material"
import React, { useState } from "react"
import useApp from "./useApp";
import Sidebar from "./Sidebar";
import ChatBox from "./ChatBox";

const App = () => {

    const [question, setQuestion] = useState("");
    const { answer, postQuestion } = useApp(question);

    return (
        <Grid container height="100vh">
            <Grid item xs={3} sx={{backgroundColor: "#062157"}}>
                <Paper elevation={2} sx={{ margin: "10px", height: "100%", backgroundColor: "#062157" }}>
                <Sidebar/>
                </Paper>
            </Grid>
            <Grid item xs={9}>
                <ChatBox />
            </Grid>
        </Grid>
    )
}

export default App