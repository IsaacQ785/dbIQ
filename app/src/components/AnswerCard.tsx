import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

function AnswerCard({text}: any) {
  return (
    <Card sx={{ 
        width: "fit-content",
        justifySelf: "start",
        alignSelf: "start",
        maxWidth: "66%",
        marginBottom: "8px",
        marginTop: "8px",
        marginRight: "auto",
        background: "#f5f5f5"
        }}>
      <CardContent>
        <Typography variant="body2">
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default AnswerCard;