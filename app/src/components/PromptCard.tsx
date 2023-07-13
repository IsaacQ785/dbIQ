import React from 'react';

import { Grid, Card, Typography} from '@mui/material';

const PromptCard = ({handlePromptClick, prompt}:any) => {
    
    return (
        <Grid xs={4} 
        sx={{
            width: "fit-content",
            minWidth: "200px",
            marginRight: "auto",
            marginLeft: "auto",
            marginBottom: "8px",
        }}
        >
            <Card
            sx={{
                paddingTop: "16px",
                paddingBottom: "16px",
                paddingLeft: "8px",
                paddingRight: "8px",
                textAlign: "center",
                cursor: "pointer",
            }}
            onClick={()=>handlePromptClick(prompt)}
            >
                <Typography variant={"body2"}>
                    {prompt}
                
                </Typography> 
            </Card>
        </Grid>
    );
};

export default PromptCard;