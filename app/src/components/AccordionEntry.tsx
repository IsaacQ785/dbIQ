import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Typography,
} from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import QuestionRow from "./QuestionRow";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { OverridableComponent } from "@mui/material/OverridableComponent";

type Props = {
  entries: string[];
  expanded: string;
  handleChange: any;
  title: string;
  Icon: OverridableComponent<any>;
  setQuestion: Dispatch<SetStateAction<string>>;
};

const AccordionEntry = ({
  entries,
  expanded,
  handleChange,
  title,
  Icon,
  setQuestion
}: Props) => {
  return (
    <Accordion
      sx={{ marginBottom: 1, backgroundColor: "#051C4A" }}
      expanded={expanded === title}
      onChange={() => handleChange(title)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: "whitesmoke" }} />}
        id={title}
      >
        <Icon sx={{ marginRight: 2, color: "whitesmoke" }} />
        <Typography sx={{ width: "33%", flexShrink: 0 }} color="whitesmoke">
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Stack direction="column" spacing={2}>
          {entries.map((question) => (
            <QuestionRow text={question} setQuestion={setQuestion} />
          ))}
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionEntry;
