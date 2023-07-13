import { Grid } from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import ChatBox from "./ChatBox";
import Sidebar from "./Sidebar";
import useApp from "./useApp";
import SearchBox from "./components/SearchBox";
import LandingPromptPage from "./LandingPromptPage";

const myDBPrompts = ["How do I set up Jave"];
const confluencePrompts = ["Confluence this"];
const dbNetworkPrompts = ["Who is who"];

const prompts = {
  MyDB: myDBPrompts,
  Confluence: confluencePrompts,
  DBNetwork: dbNetworkPrompts,
};

const App = () => {
  const [question, setQuestion] = useState("");
  const [list, setList] = useState<string[]>([]);
  const { postQuestion } = useApp(question, setList, list);

  const [notLandingPage, setNotLandingPage] = useState(false);

  function handleChangeText(e: ChangeEvent<HTMLInputElement>) {
    setQuestion(e.target.value);
  }

  function handlePromptClicks(prompt: any) {
    setNotLandingPage(!notLandingPage);
    setQuestion(prompt);
  }

  return (
    <>
      <Grid container height="100vh">
        <Grid item xs={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={9}>
          <Grid
            sx={{
              height: "90vh",
            }}
          >
            {notLandingPage ? (
              <ChatBox
                list={list}
                text={question}
                handleChangeText={handleChangeText}
                handleQuestion={postQuestion}
              />
            ) : (
              <LandingPromptPage
                handlePromptClick={(prompt: any) => handlePromptClicks(prompt)}
                prompts={prompts}
              />
            )}
          </Grid>
          <SearchBox
            handleChangeText={handleChangeText}
            text={question}
            list={list}
            handleQuestion={postQuestion}
          />
        </Grid>
      </Grid>
      <Grid item xs={9}>
        <ChatBox
          list={list}
          text={question}
          handleChangeText={handleChangeText}
          handleQuestion={postQuestion}
        />
      </Grid>
    </>
  );
};

export default App;
