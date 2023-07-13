import React, { ChangeEvent } from "react";
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";

import {useState} from "react";

//components
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import UserQuestionCard from "./components/UserQuestionCard";
import AnswerCard from "./components/AnswerCard";
import { Margin } from "@mui/icons-material";

const inputList: any = ["Hello, [name]! How can I help you with today?Hello, [name]! How can I help you with today?Hello, [name]! How can I help you with today?Hello, [name]! How can I help you with today?Hello, [name]! How can I help you with today?", "How do I install this Java dependiency?How do I install this Java dependiency?How do I install this Java dependiency?How do I install this Java dependiency?How do I install this Java dependiency?", "This is how you do it", "Ok, great! Thanks for the help!", "No problem!", "Bye!",, "This is how you do it", "Ok, great! Thanks for the help!", "No problem!", "Bye!", "This is how you do it", "Ok, great! Thanks for the help!", "No problem!", "Bye!", "How do I install this Java dependiency?", "This is how you do it", "Ok, great! Thanks for the help!", "No problem!", "Bye!",, "This is how you do it", "Ok, great! Thanks for the help!", "No problem!", "Bye!", "This is how you do it", "Ok, great! Thanks for the help!", "No problem!", "Bye!"];

function ChatBox() {

    const [text, setText] = useState("");
    const [list, setQuestionList] = useState<string[]>(inputList);

    function handleChangeText(e: ChangeEvent<HTMLInputElement>){
        setText(e.target.value);
    }

    function handleQuestion(e: any) {
        setQuestionList([...list, text])
        setText("")
    }

    return (
        <>
        <Paper elevation={4} sx={{ 
            height: "86vh",
            marginBottom: "12px",
            }}>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={{ maxHeight: "100%",
                maxWidth: "100%",
                marginBottom: "8px",
            }}
                >
            <div
            style={{
                width: "100%",
                marginLeft: "8px",
                marginRight: "8px",
                overflowY: "scroll", 
            }}
            >
                {
                    list && list.map((item, index)=>{
                        {
                            if(index % 2 != 0){
                                
                    return(<UserQuestionCard text={item}/>)
                            }else{
                                return(<AnswerCard text={item} />)
                            }
                        }
                    })
                }
            </div>
            </Grid>
        </Paper>
         <Grid
         container
         direction="column"
         alignItems="center"
     >
         <Grid item xs={12}
         >
             <TextField
                 id="filled-basic"
                 label="Filled"
                 variant="filled"
                 sx={{ 
                 height:"3rem",
                 width: "80ch",
             }}
             value={text}
             onChange={handleChangeText}
             />
         <Button         
         variant="contained"
         onClick={handleQuestion}
         sx={{ 
             height:"3rem",
             marginLeft: "8px",
             marginTop: "auto",
             marginBottom: "auto"
         }}
         {
             ...(list.length % 2 === 0 ? { disabled: true } : {})
         }
     
         >
             {<SearchOutlinedIcon/>}
             </Button>
         </Grid>
     </Grid>
     </>
    );
}

export default ChatBox;
