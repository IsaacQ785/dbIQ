import { Grid, Typography } from "@mui/material";
import React from "react";

type Props = {
    text: string;
}
const QuestionRow = ({ text }: Props) => {
    return (
        <Grid display="flex" flexDirection="row" border={2} borderRadius={3} borderColor="whitesmoke">
        <Typography
        padding={1}
          variant="body1"
          textOverflow="ellipsis"
          color="whitesmoke"
          width="auto"
        >
          {text}
        </Typography>
      </Grid>
    )
}

export default QuestionRow;