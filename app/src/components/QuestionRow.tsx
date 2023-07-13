import { Button, Grid, Typography } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";

type Props = {
    text: string;
    setQuestion?: Dispatch<SetStateAction<string>>;
}
const QuestionRow = ({ text, setQuestion }: Props) => {
    return (
        <Grid display="flex" flexDirection="row" border={2} borderRadius={3} borderColor="whitesmoke" onClick={() => {}} className="button">
          <Button onClick={() => setQuestion?.(text)}>
        <Typography
        padding={1}
          variant="caption"
          textOverflow="ellipsis"
          color="whitesmoke"
          width="auto"
        >
          {text}
        </Typography></Button>
      </Grid>
    )
}

export default QuestionRow;