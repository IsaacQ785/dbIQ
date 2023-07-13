import React from "react";
import {
  AppBar,
  Button,
  Grid,
  IconButton,
  Stack,
  TextField,
  Box,
  Toolbar,
  Typography,
  Link,
  Accordion,
  AccordionSummary,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CircleIcon from "@mui/icons-material/Circle";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import QuestionRow from "./components/QuestionRow";
import AccordionEntry from "./components/AccordionEntry";
import CodeIcon from "@mui/icons-material/Code";
import PeopleIcon from "@mui/icons-material/People";
import AddIcon from "@mui/icons-material/Add";

const Sidebar = ({ setQuestion}: any) => {
  const [expanded, setExpanded] = React.useState<string>("");

  const handleChange = (panel: string) => {
    if (panel === expanded) {
      setExpanded("");
    } else {
      setExpanded(panel);
    }
  };

  const devQuestions = [
    "What db licenced technology is widely used for _____?",
    "What new projects have started within _____ in the past year?",
    "How can ____ be integrated into our tech stack?",
  ];
  const newJoinerQuestions = [
    "What is the tech stack of ________?",
    "How do I install ________?",
    "Give me a summary of what _____ app does?",
  ];
  const peopleQuestions = [
    "Who should I contact regarding _____?",
    "What events are happening this week in _____?",
    "What events are _____ attending in the near future?",
  ];

  return (
    <Grid
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      height="100%"
      sx={{ backgroundColor: "#062157" }}
    >
      <Grid maxWidth="-webkit-fill-available">
        <AppBar position="static">
          <Toolbar sx={{ backgroundColor: "#062157" }}>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              dbIQ
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid margin="10px" maxWidth="-webkit-fill-available">
          <AccordionEntry
            title="Dev"
            entries={devQuestions}
            expanded={expanded}
            Icon={CodeIcon}
            handleChange={handleChange}
            setQuestion={setQuestion}
          />
          <AccordionEntry
            title="New Joiner"
            entries={newJoinerQuestions}
            expanded={expanded}
            Icon={AddIcon}
            handleChange={handleChange}
            setQuestion={setQuestion}
          />
          <AccordionEntry
            title="People"
            entries={peopleQuestions}
            expanded={expanded}
            Icon={PeopleIcon}
            handleChange={handleChange}
            setQuestion={setQuestion}
          />
        </Grid>
      </Grid>
      <Grid alignContent="center" marginBottom="20px">
        <Link href="#">FAQs</Link>
      </Grid>
    </Grid>
  );
};

export default Sidebar;
