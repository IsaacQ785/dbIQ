import React, { ChangeEvent, Dispatch, SetStateAction } from "react";
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";

import { useState } from "react";

//components
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import UserQuestionCard from "./components/UserQuestionCard";
import AnswerCard from "./components/AnswerCard";
import { Margin } from "@mui/icons-material";
import Search from "./components/SearchBox";

const inputList: any = ["Hello, [name]! How can I help you with today?Hello, [name]! How can I help you with today?Hello, [name]! How can I help you with today?Hello, [name]! How can I help you with today?Hello, [name]! How can I help you with today?", "How do I install this Java dependiency?How do I install this Java dependiency?How do I install this Java dependiency?How do I install this Java dependiency?How do I install this Java dependiency?", "This is how you do it", "Ok, great! Thanks for the help!", "No problem!", "Bye!",, "This is how you do it", "Ok, great! Thanks for the help!", "No problem!", "Bye!", "This is how you do it", "Ok, great! Thanks for the help!", "No problem!", "Bye!", "How do I install this Java dependiency?", "This is how you do it", "Ok, great! Thanks for the help!", "No problem!", "Bye!",, "This is how you do it", "Ok, great! Thanks for the help!", "No problem!", "Bye!", "This is how you do it", "Ok, great! Thanks for the help!", "No problem!", "Bye!"];

function ChatBox({list, text, handleChangeText, handleQuestion}: any) {

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
            {list &&
              list.map((item, index) => {
                {
                    list && list.map((item:any, index:any)=>{
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
        <Search 
        handleChangeText={handleChangeText} 
        text={text}
        list={list}
        handleQuestion={handleQuestion}
        />
     </>
    );
}

export default ChatBox;
