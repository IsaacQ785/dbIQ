import { Button, Grid, Paper, TextField, Typography } from "@mui/material"
import React, { useState } from "react"
import useApp from "./useApp";

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
                <Paper elevation={4} sx={{ margin: "10px", height: "calc(100% -20px)" }}>
                    <Grid display="flex" flexDirection="column-reverse">
                        <Grid>
                            <TextField
                                id="outlined-controlled"
                                label="Controlled"
                                value={question}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    setQuestion(event.target.value);
                                }}
                            />
                            <Button onClick={postQuestion}>Ask Questions</Button>
                        </Grid>
                        <Typography variant="h5" overflow="ellipsis" width="30px">

                            {answer}ahcmofaerupxhaperuiagperaier</Typography>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default App