import { Grid } from "@mui/material";
import React from "react";
import AnswerCard from "./components/AnswerCard";
import UserQuestionCard from "./components/UserQuestionCard";

function ChatBox({ list }: any) {
  return (
    <>
      <Grid
        sx={{
          height: "86vh",
          marginBottom: "12px",
        }}
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{ maxHeight: "100%", maxWidth: "100%", marginBottom: "8px", height: "100%", marginTop: "auto" }}
        >
          <div
            style={{
              width: "100%",
              marginTop: "auto",
              marginLeft: "8px",
              marginRight: "8px",
              overflowY: "scroll",
            }}
          >
            {list &&
              list.map((item: any, index: any) => {
                {
                  if (index % 2 === 0) {
                    return <UserQuestionCard text={item} />;
                  } else {
                    return <AnswerCard text={item} />;
                  }
                }
              })}
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default ChatBox;
