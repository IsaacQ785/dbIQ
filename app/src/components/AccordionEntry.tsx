import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import QuestionRow from "./QuestionRow";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { OverridableComponent } from "@mui/material/OverridableComponent";

type Props = {
  entries: string[];
  expanded: string;
  handleChange: any;
  title: string;
  Icon: OverridableComponent<any>;
};

const AccordionEntry = ({ entries, expanded, handleChange, title, Icon }: Props) => {
  return (
    <Accordion
    sx={{marginBottom: 1, backgroundColor: "#051C4A"}}
      expanded={expanded === title}
      onChange={() => handleChange(title)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: "whitesmoke"}} />}
        id={title}
      >
        <Icon sx={{ marginRight: 2,  color:"whitesmoke"}}/>
        <Typography sx={{ width: "33%", flexShrink: 0 }} color="whitesmoke">
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Stack direction="column" spacing={2}>
          {entries.map((question) => (
            <QuestionRow text={question} />
          ))}
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionEntry;
