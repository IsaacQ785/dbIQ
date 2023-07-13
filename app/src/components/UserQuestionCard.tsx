import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AnswerCard from './AnswerCard';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

function UserQuestionCard({text}: any) {
  return (
    <Card sx={{ 
      minWidth: 100, 
      maxWidth: "50%",
      marginBottom: "8px",
      marginTop: "8px",
      marginLeft: "auto",
      marginRight: "16px",
      }}>
      <CardContent>
        <Typography variant="body2">
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default UserQuestionCard;