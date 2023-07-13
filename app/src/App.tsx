import { Grid } from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import ChatBox from "./ChatBox";
import Sidebar from "./Sidebar";
import useApp from "./useApp";

const App = () => {
  const [question, setQuestion] = useState("");
  const [list, setList] = useState<string[]>([]);
  const { postQuestion } = useApp(question, setList, list);
  function handleChangeText(e: ChangeEvent<HTMLInputElement>) {
    setQuestion(e.target.value);
  }

  return (
    <>
      <Grid container height="100vh">
        <Grid item xs={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={9}>
          <ChatBox
            list={list}
            text={question}
            handleChangeText={handleChangeText}
            handleQuestion={postQuestion}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
