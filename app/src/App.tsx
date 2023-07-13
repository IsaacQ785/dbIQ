import { Button, Grid, Paper, TextField, Typography } from "@mui/material"
import React, { useState } from "react"
import useApp from "./useApp";
import ChatBox from "./ChatBox";

const App = () => {

    const [question, setQuestion] = useState("");
    const { answer, postQuestion } = useApp(question);

    return (
        <Grid container>
            <Grid item xs={3}>
                <Paper elevation={2} sx={{ margin: "10px", height: "calc(100% -20px)" }}>
                    <Typography>left</Typography>
                </Paper>
            </Grid>
            <Grid item xs={9}>
                <ChatBox />
            </Grid>
        </Grid>
    )
}

export default App