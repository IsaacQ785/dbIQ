import { Grid } from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import ChatBox from "./ChatBox";
import Sidebar from "./Sidebar";
import useApp from "./useApp";
import SearchBox from "./components/SearchBox";
import LandingPromptPage from "./LandingPromptPage";

const myDBPrompts = ["What in person events are happening within tech London this week?","Which domain is responsible for regulatory compliance within CB?",];
const confluencePrompts = ["How do I install JAVA 17?","What new software has been licenced in the bank within the last 6 months?","Show me the flow diagram for securities in India. "];
const dbNetworkPrompts = ["Generate a list of Associates in Frankfurt.","Who should I contact regarding a Fabric issue?"];

const prompts = {
  MyDB: myDBPrompts,
  Confluence: confluencePrompts,
  DBNetwork: dbNetworkPrompts,
};

const App = () => {
  const [question, setQuestion] = useState("");
  const [list, setList] = useState<string[]>([]);
  const { postQuestion } = useApp(question, setQuestion,setList, list);

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
          <Sidebar setQuestion={setQuestion}/>
        </Grid>
        <Grid item xs={9}>
          <Grid
            sx={{
              height: "90vh",
            }}
          >
            {notLandingPage || list.length != 0 ? (
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
    </>
  );
};

export default App;
