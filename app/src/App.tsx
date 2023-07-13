import { Button, Grid, Paper, TextField, Typography } from "@mui/material"
import React, { useState, ChangeEvent } from "react"
import useApp from "./useApp";
import Sidebar from "./Sidebar";
import ChatBox from "./ChatBox";
import LandingPromptPage from "./LandingPromptPage";
import { Search } from "@mui/icons-material";

import SearcBox from "./components/SearchBox";

const inputList: any = ["Hello, [name]! How can I help you with today?Hello, [name]! How can I help you with today?Hello, [name]! How can I help you with today?Hello, [name]! How can I help you with today?Hello, [name]! How can I help you with today?", "How do I install this Java dependiency?How do I install this Java dependiency?How do I install this Java dependiency?How do I install this Java dependiency?How do I install this Java dependiency?", "This is how you do it", "Ok, great! Thanks for the help!", "No problem!", "Bye!",, "This is how you do it", "Ok, great! Thanks for the help!", "No problem!", "Bye!", "This is how you do it", "Ok, great! Thanks for the help!", "No problem!", "Bye!", "How do I install this Java dependiency?", "This is how you do it", "Ok, great! Thanks for the help!", "No problem!", "Bye!",, "This is how you do it", "Ok, great! Thanks for the help!", "No problem!", "Bye!", "This is how you do it", "Ok, great! Thanks for the help!", "No problem!", "Bye!"];

const App = () => {
    const [question, setQuestion] = useState("");
    const { answer, postQuestion } = useApp(question);

    const [notLandingPage, setNotLandingPage] = useState(false);

    const [firstSearch, setFirstSearch] = useState(false);

    const [text, setText] = useState("");
    const [list, setQuestionList] = useState<string[]>(inputList);

    function handleChangeText(e: ChangeEvent<HTMLInputElement>){
        setText(e.target.value);
    }

    function handleQuestion(e: void) {
        setQuestionList([...list, text])
        setText("")
    }

    return (
        <> 
        <Grid container height="100vh">
            <Grid item xs={3} 
            >
                <Sidebar/>
            </Grid>
            <Grid item xs={9}>
                {
                    notLandingPage ?
                    <ChatBox
                    list={list}
                text={text}
                handleChangeText={handleChangeText}
                handleQuestion={handleQuestion}
                
                    />:
                    <LandingPromptPage />
                }
                <SearcBox
                handleChangeText={handleChangeText}
                text={text}
                list={list}
                handleQuestion={handleQuestion}
                />
            </Grid>
        </Grid>

        </>
    )
}

export default App